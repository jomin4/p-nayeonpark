# CLAUDE.md

이 레포의 주 프로젝트는 [relate-os-graph](relate-os-graph/README.md)다.
운영체제(OS)를 공부하면서 나온 지식을 relate 그래프 DB에 쌓고,
주제마다 **웹 조사 → 시각화 자료 → 설명 글** 순서의 기술 블로그 글로 남긴다.

## 작업 방식

- 학습 프로젝트다. 작업은 Claude가 직접 실행하되, 단계마다 **무슨 작업을 어떤 명령어·Cypher·도구로 했는지** 한국어로 설명한다.
- 작업 하나가 끝나면 묻지 않고 커밋하고 `origin/main`으로 푸시한다.
- 공개 레포다. `.env`, 토큰, 그래프 데이터(`relate-os-graph/data/`, `*.rl`)는 절대 커밋하지 않는다.
- 다이어그램은 아이콘 위주로 그리고, 그림 안에는 설명 문장을 넣지 않는다.

## 그래프 DB 사용

- 그래프 파일: `relate-os-graph/data/os-graph.rl`. 접근은 MCP 도구로만 한다.
  - 쓰기: `mcp__relate__write_cypher` (한 번 호출에 한 문장)
  - 읽기: `mcp__relate__read_cypher`
  - 구조 확인: `mcp__relate__get_schema`
- MCP 서버가 파일을 열고 있으므로 터미널에서 `relate query`로 쓰지 않는다(단일 writer 잠금).
- relate 문법이 확실하지 않으면 `relate` 스킬을, 스키마를 바꿀 때는 `relate-schema-design` 스킬을 먼저 읽는다.
- 스키마(제약조건·인덱스)는 [schema/init.cypher](relate-os-graph/schema/init.cypher)가 기준이다. 바꿀 때는 파일과 DB를 함께 고친다.
- 단원 13개는 [schema/seed-topics.cypher](relate-os-graph/schema/seed-topics.cypher)가 원본이다. 그래프 파일은 git에 없으므로 새로 만들 때는 `init.cypher` → `seed-topics.cypher` 순서로 실행한다.

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
6. 세션 마무리: `Session.summary`를 채우고 `COVERED`, `PRODUCED`를 연결한 다음 커밋하고 푸시한다.

## 파일 위치

| 무엇 | 경로 |
|---|---|
| 블로그 글 | `relate-os-graph/posts/YYYY-MM-DD-<slug>.md` |
| 글에 쓰는 시각화 자료 | `relate-os-graph/posts/assets/<slug>/` (`Visual.path`는 `relate-os-graph/` 기준 상대 경로) |
| 시각화 렌더링 (HTML → PNG) | `relate-os-graph/scripts/render.ps1` |
| 자주 쓰는 조회 쿼리 | `relate-os-graph/scripts/queries.cypher` |
| 아키텍처·설계 문서 | `relate-os-graph/docs/` |
| 스키마 | `relate-os-graph/schema/init.cypher` |
