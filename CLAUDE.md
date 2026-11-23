# CLAUDE.md

이 레포는 Claude Code로 운영체제를 학습하고, 그 결과물의 관계를 relate 임베디드 그래프 DB에 쌓아
Claude Code가 지식 데이터를 직접 관리하며, 그 데이터로 대시보드를 만드는 프로젝트다(소개: [README](README.md), 기술 문서: [docs/TECHNICAL.md](docs/TECHNICAL.md)).
주제마다 **웹 조사 → 시각화 자료 → 설명 글** 순서의 기술 블로그 글로 남긴다.

## 작업 방식

- 학습 프로젝트다. 작업은 Claude가 직접 실행하되, 단계마다 **무슨 작업을 어떤 명령어·Cypher·도구로 했는지** 한국어로 설명한다.
- 작업 하나가 끝나면 묻지 않고 커밋하고 `origin/main`으로 푸시한다.
- 공개 레포다. `.env`, 토큰, 그래프 데이터(`data/`, `*.rl`)는 절대 커밋하지 않는다.
- 다이어그램은 아이콘 위주로 그리고, 그림 안에는 설명 문장을 넣지 않는다.

## 그래프 DB 사용

- 그래프 파일: `data/os-graph.rl`. 접근은 MCP 도구로만 한다.
  - 쓰기: `mcp__relate__write_cypher` (한 번 호출에 한 문장)
  - 읽기: `mcp__relate__read_cypher`
  - 구조 확인: `mcp__relate__get_schema`
- MCP 서버가 파일을 열고 있으므로 터미널에서 `relate query`로 쓰지 않는다(단일 writer 잠금).
- relate 문법이 확실하지 않으면 `relate` 스킬을, 스키마를 바꿀 때는 `relate-schema-design` 스킬을 먼저 읽는다.
- 스키마(제약조건·인덱스)는 [schema/init.cypher](schema/init.cypher)가 기준이다. 바꿀 때는 파일과 DB를 함께 고친다.
- 단원 13개는 [schema/seed-topics.cypher](schema/seed-topics.cypher)가 원본이다. 그래프 파일은 git에 없으므로 새로 만들 때는 `init.cypher` → `seed-topics.cypher` 순서로 실행한다.

### 쓰기 규칙

1. 노드는 항상 **키 속성으로 `MERGE`** 한다. `CREATE`로 노드를 만들지 않는다. 같은 쓰기를 다시 해도 중복이 생기지 않는다.
   ```cypher
   MERGE (c:Concept {slug: $slug})
   ON CREATE SET c.name = $name, c.createdAt = $today
   SET c.summary = $summary, c.level = $level, c.updatedAt = $today
   ```
2. 관계도 `MERGE`로 만든다. 양 끝 노드를 먼저 `MATCH`한다.
   ```cypher
   MATCH (a:Concept {slug: $from}), (b:Concept {slug: $to})
   MERGE (a)-[:PREREQUISITE_OF]->(b)
   ```
3. 값은 문장에 직접 넣지 말고 `parameters`로 넘긴다.
4. 이름 규칙: 라벨은 PascalCase, 관계는 UPPER_SNAKE_CASE, 속성은 camelCase다. `slug`는 영어 kebab-case, `name`·`summary`는 한국어로 쓴다.

### 노드와 속성

| 라벨 | 키 (UNIQUE) | 필수 | 기타 속성 |
|---|---|---|---|
| `Topic` | `slug` | `name` | `order` (단원 순서, 정수), `summary` |
| `Concept` | `slug` | `name` | `summary`, `level` (1 기초 · 2 중급 · 3 심화) |
| `Session` | `id` (`YYYY-MM-DD-NN`) | `date` | `topic` (단원 slug), `summary` |
| `Question` | `id` (`<session id>-qN`) | `text` | `answered` (불리언), `answer` |
| `Example` | `id` (`<concept slug>-exN`) | | `kind` (`code` · `analogy`), `body` |
| `Post` | `slug` | `title` | `status` (`draft` · `published`), `path` |
| `Visual` | `path` | | `type` (`diagram` · `chart` · `animation` · `image`), `caption` |
| `Source` | `url` | | `title`, `kind` (`doc` · `blog` · `video` · `book` · `paper`) |

날짜는 `YYYY-MM-DD` 문자열로 통일한다(`createdAt`, `updatedAt`, `date`).

### 관계

| 관계 | 방향 |
|---|---|
| `HAS_CONCEPT` | `Topic → Concept` |
| `PREREQUISITE_OF` | `Concept → Concept` (앞이 선수 지식) |
| `CONFUSED_WITH` | `Concept — Concept` (방향 무시, 한 번만 만든다) |
| `COVERED` | `Session → Concept` |
| `PRODUCED` | `Session → Post` |
| `ABOUT` | `Question → Concept` |
| `ILLUSTRATES` | `Example → Concept` |
| `EXPLAINS` | `Post → Concept` |
| `EMBEDS` | `Post → Visual` |
| `CITES` | `Post → Source` |
| `DEPICTS` | `Visual → Concept` |
| `DERIVED_FROM` | `Visual → Source` |
| `DESCRIBES` | `Source → Concept` |

## 학습 세션 흐름

1. 세션 시작: `Session` 노드를 `MERGE`하고, 지난 세션과 답을 못 찾은 `Question`을 조회해서 이어 갈 곳을 정한다.
2. 웹 조사: 신뢰할 만한 자료를 찾아 `Source`로 저장하고 `DESCRIBES`로 개념에 잇는다.
3. 시각화 자료: 개념을 그림으로 만든다(HTML/SVG → PNG). `Visual`로 저장하고 `DEPICTS`와 `DERIVED_FROM`으로 잇는다.
4. 설명 글: 시각화를 먼저 보여 주고 설명하는 블로그 글을 쓴다. `Post`로 저장하고 `EXPLAINS`, `EMBEDS`, `CITES`로 잇는다.
5. 개념 정리: 새로 배운 `Concept`, 선수 관계, 헷갈린 개념 쌍, `Question`, `Example`을 기록한다.
6. 세션 마무리: `Session.summary`를 채우고 `COVERED`, `PRODUCED`를 연결한다. `graph-data/<NN>-<topic>.json`을 갱신하고 `scripts/build_dashboard_data.py`로 대시보드 데이터를 다시 만든 다음 커밋하고 푸시한다.

## 단원 병렬 진행 (서브에이전트)

여러 단원을 서브에이전트로 동시에 진행할 때는 역할을 나눈다. relate 그래프는 writer가 하나뿐이라 동시 쓰기를 하지 않는다.

| 역할 | 하는 일 | 하지 않는 일 |
|---|---|---|
| 서브에이전트 (단원 1개 담당) | 웹 조사, 시각화 HTML·PNG, 블로그 글, `graph-data/<NN>-<topic>.json` 작성, 검증기 통과 | 그래프 DB 쓰기, git 커밋·푸시, 자기 단원 밖 파일 수정 |
| 메인 세션 | 검증기 재실행, 시각화 검수, 적재 지시, 결과 확인, 커밋·푸시 | 서브에이전트 산출물을 검증 없이 적재 |
| 적재 에이전트 (한 번에 하나만) | `scripts/load-topic.cypher` + JSON을 `write_cypher`로 단원 순서대로 적재, 확인 쿼리, 미해결 참조 보고 | 파일 수정, git, 병렬 적재 |

- 그래프 데이터 형식의 기준은 [graph-data/01-os-overview.json](graph-data/01-os-overview.json)이다.
- 검증: `python -I scripts/validate_topic.py graph-data/<NN>-<topic>.json` (레포 루트에서 실행)
- 개념은 한 단원만 소유한다. 다른 단원 개념은 slug로 참조만 한다.
- 그래프를 처음부터 다시 만들 때: `scripts/rebuild-graph.ps1`(Claude Code를 닫은 상태에서, 또는 `-Database`로 다른 경로). 내부적으로 `init.cypher` → `seed-topics.cypher` → `graph-data/*.json`을 번호 순서로 두 번 적재한다(두 번째에 앞쪽 참조가 채워진다).

## 파일 위치

| 무엇 | 경로 |
|---|---|
| 블로그 글 | `posts/YYYY-MM-DD-<slug>.md` |
| 글에 쓰는 시각화 자료 | `posts/assets/<slug>/` (`Visual.path`는 레포 루트 기준 상대 경로) |
| 단원별 그래프 데이터 | `graph-data/<NN>-<topic>.json` |
| 그래프 데이터 검증·적재 | `scripts/validate_topic.py`, `scripts/load-topic.cypher` |
| 시각화 렌더링 (HTML → PNG) | `scripts/render.ps1` |
| 대시보드 (데이터 재생성: `scripts/build_dashboard_data.py`) | `docs/dashboard/` (미리보기: `.claude/launch.json`의 `dashboard`) |
| 자주 쓰는 조회 쿼리 | `scripts/queries.cypher` |
| 아키텍처·설계 문서 | `docs/` |
| 스키마 | `schema/init.cypher` |
