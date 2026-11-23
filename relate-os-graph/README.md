# relate-os-graph

Claude Code 세션에서 운영체제(OS)를 공부하며 나온 개념·질문·예제를
[relate](https://relatedb.ai/) 임베디드 그래프 DB에 지식 그래프로 쌓는 프로젝트.
학습 결과물은 **웹 조사 → 시각화 자료 → 설명 글** 흐름의 기술 블로그 형태로 남긴다.

## 아키텍처

![System architecture](docs/images/architecture.png)

> 원본: [docs/architecture.html](docs/architecture.html)

## 그래프 설계

![Graph schema](docs/images/graph-schema.png)

> 원본: [docs/graph-schema.html](docs/graph-schema.html)

| 영역 | 노드 | 관계 |
|---|---|---|
| 지식 코어 | `Topic`, `Concept` | `HAS_CONCEPT`, `PREREQUISITE_OF`, `CONFUSED_WITH` |
| 학습 기록 | `Session`, `Question`, `Example` | `COVERED`, `ABOUT`, `ILLUSTRATES`, `PRODUCED` |
| 콘텐츠 파이프라인 | `Source`, `Visual`, `Post` | `DESCRIBES`, `DEPICTS`, `EXPLAINS`, `EMBEDS`, `DERIVED_FROM`, `CITES` |

## 설치와 연결

relate v1.2.0 기준.

```powershell
# 1. relate CLI 설치 (%LOCALAPPDATA%\Programs\relate, 사용자 PATH에 추가됨)
irm https://relatedb.ai/install.ps1 | iex

# 2. 동작 확인 (그래프 파일이 없으면 새로 만든다)
relate query --database ./relate-os-graph/data/os-graph.rl --read-only -c "MATCH (n) RETURN count(n) AS nodes"
```

Claude Code는 레포 루트의 [`.mcp.json`](../.mcp.json)을 읽어
`relate serve --mcp stdio`를 띄운다. 처음 열 때 프로젝트 MCP 서버 사용을 승인하면 아래 도구가 생긴다.

| MCP 도구 | 역할 |
|---|---|
| `mcp__relate__write_cypher` | CREATE · MERGE · SET · DELETE |
| `mcp__relate__read_cypher` | 조회 전용 Cypher |
| `mcp__relate__get_schema` | 라벨·관계·속성 요약 |

> MCP 서버가 그래프 파일을 열고 있는 동안에는 CLI로 쓰기를 할 수 없다(단일 writer).

### 에이전트 스킬 (레포 전용)

relate 공식 스킬을 사용자 전체(`~/.claude/skills`)가 아니라 이 레포의
[`.claude/skills/`](../.claude/skills/)에만 두었다. 파일은 relatedb.ai에서 받은 뒤
[docs-artifacts.json](https://relatedb.ai/docs/docs-artifacts.json)의 SHA-256과 대조해 검증했다.

| 스킬 | 버전 | 용도 |
|---|---|---|
| `relate` | 1.2.0 | CLI · Cypher 25 · 벡터 · 운영 레퍼런스 |
| `relate-schema-design` | 1.2.0 | 라벨 · 관계 · 제약조건 · 인덱스 설계 |

> `relate skill install`은 사용자 폴더에만 설치하므로 쓰지 않는다.
> relate를 업그레이드하면 같은 방법으로 스킬 파일도 새 버전으로 받아야 한다.

## 학습 기록

13개 단원 모두 2026-11-23에 작성했다. 1단원은 메인 세션이 직접, 2~13단원은 서브에이전트가 병렬로 만들고 메인 세션이 검증·적재했다.

| # | 단원 | 글 | 개념 | 시각화 | 자료 | 미해결 질문 |
|---|---|---|---|---|---|---|
| 1 | 운영체제 개요 | [운영체제 개요: 커널 모드, 사용자 모드, 그리고 인터럽트](posts/2026-11-23-os-overview.md) | 17 | 3 | 5 | 2 |
| 2 | 운영체제 구조 | [운영체제 구조: 시스템 콜, 커널 설계, 그리고 부팅](posts/2026-11-23-os-structure.md) | 19 | 3 | 8 | 2 |
| 3 | 프로세스 | [프로세스: 실행 중인 프로그램의 구조, 상태, 그리고 일생](posts/2026-11-23-process.md) | 19 | 4 | 7 | 2 |
| 4 | 스레드와 동시성 | [스레드와 동시성: 한 프로세스 안의 여러 실행 흐름](posts/2026-11-23-thread.md) | 19 | 4 | 7 | 2 |
| 5 | CPU 스케줄링 | [CPU 스케줄링: 누구에게, 언제, 얼마나 CPU를 줄까](posts/2026-11-23-cpu-scheduling.md) | 20 | 4 | 6 | 2 |
| 6 | 프로세스 동기화 | [프로세스 동기화: 경쟁 조건에서 락, 세마포어, 모니터까지](posts/2026-11-23-synchronization.md) | 20 | 4 | 8 | 2 |
| 7 | 교착 상태 | [교착 상태: 서로를 기다리다 모두 멈출 때](posts/2026-11-23-deadlock.md) | 16 | 4 | 6 | 2 |
| 8 | 메모리 관리 | [메모리 관리: 주소 변환, 연속 할당, 페이징, 그리고 TLB](posts/2026-11-23-memory-management.md) | 19 | 4 | 11 | 2 |
| 9 | 가상 메모리 | [가상 메모리: 페이지 폴트, 페이지 교체, 그리고 스래싱](posts/2026-11-23-virtual-memory.md) | 20 | 4 | 6 | 2 |
| 10 | 대용량 저장장치 | [대용량 저장장치: HDD, SSD, 디스크 스케줄링, 그리고 RAID](posts/2026-11-23-storage.md) | 20 | 4 | 12 | 2 |
| 11 | 파일 시스템 | [파일 시스템: 파일 디스크립터, inode, 할당 방식, 그리고 저널링](posts/2026-11-23-file-system.md) | 20 | 4 | 12 | 2 |
| 12 | 입출력 시스템 | [입출력 시스템: 장치 컨트롤러, 폴링과 인터럽트, DMA, 그리고 블로킹·비동기 입출력](posts/2026-11-23-io-system.md) | 20 | 4 | 12 | 3 |
| 13 | 보호와 보안 | [보호와 보안: 접근 행렬, 유닉스 권한, 그리고 버퍼 오버플로 완화](posts/2026-11-23-protection-security.md) | 20 | 4 | 17 | 2 |
| | **합계** | 13편 | **249** | **50** | 113 (중복 제외) | 27 |

### 그래프 현황 (2026-11-23)

| 노드 | 수 | | 관계 | 수 |
|---|---|---|---|---|
| Topic | 13 | | PREREQUISITE_OF | 416 (단원 간 114) |
| Concept | 249 | | DESCRIBES | 553 |
| Session · Post | 13 · 13 | | EXPLAINS · DEPICTS | 259 · 251 |
| Source | 113 | | HAS_CONCEPT · COVERED | 249 · 249 |
| Visual | 50 | | ABOUT | 176 |
| Question | 77 (미해결 27) | | CITES · DERIVED_FROM | 117 · 116 |
| Example | 62 | | CONFUSED_WITH | 64 |

선수 관계를 따라가면 단원을 넘나드는 학습 경로가 나온다. 예: `운영체제 → 가상화 → 논리 주소 → MMU → 베이스·한계 레지스터 → 세그멘테이션 → 외부 단편화 → 페이징 → 가상 메모리 → 스왑 공간 → 요구 페이징 → 페이지 폴트 → 스래싱` (1·8·9단원, 12단계)

### 제작 방식

| 단계 | 누가 | 무엇을 |
|---|---|---|
| 조사·집필 | 단원별 서브에이전트 (병렬) | [작업 지침](docs/topic-agent-brief.md)에 따라 웹 조사 → 시각화(HTML→PNG) → 블로그 글 → `graph-data/<NN>-<topic>.json` |
| 검증 | 메인 세션 | [validate_topic.py](scripts/validate_topic.py), PNG 검수, 글 속 수치 재계산 |
| 적재 | 적재 에이전트 (한 번에 하나) | [load-topic.cypher](scripts/load-topic.cypher)로 단원 순서대로 `MERGE`, 앞쪽 참조는 두 번째 적재로 채움 |

## 학습 로드맵

| # | 단원 | 다루는 내용 |
|---|---|---|
| 1 | 운영체제 개요 | 운영체제의 역할, 커널 모드와 사용자 모드, 인터럽트 |
| 2 | 운영체제 구조 | 시스템 콜, 커널 구조(모놀리식·마이크로커널), 부팅 |
| 3 | 프로세스 | 프로세스 상태, PCB, 문맥 교환, 프로세스 간 통신 |
| 4 | 스레드와 동시성 | 스레드 모델, 멀티코어, 사용자·커널 스레드 |
| 5 | CPU 스케줄링 | 스케줄링 기준과 알고리즘(FCFS, SJF, RR, MLFQ) |
| 6 | 프로세스 동기화 | 경쟁 조건, 임계 구역, 뮤텍스, 세마포어, 모니터 |
| 7 | 교착 상태 | 교착 상태 조건, 예방·회피·탐지, 은행원 알고리즘 |
| 8 | 메모리 관리 | 주소 바인딩, 연속 할당, 페이징, 세그멘테이션, TLB |
| 9 | 가상 메모리 | 요구 페이징, 페이지 교체, 스래싱, 작업 집합 |
| 10 | 대용량 저장장치 | HDD·SSD 구조, 디스크 스케줄링, RAID |
| 11 | 파일 시스템 | 파일·디렉터리, 할당 방식, inode, 저널링 |
| 12 | 입출력 시스템 | 폴링·인터럽트·DMA, 디바이스 드라이버, 버퍼링 |
| 13 | 보호와 보안 | 접근 제어, 권한 분리, 메모리 보호, 보안 위협 |

## 폴더 구조

```
relate-os-graph/
├── data/        # os-graph.rl (그래프 DB 파일, git 제외)
├── docs/        # 아키텍처·설계 문서, 시각화 자료, 블로그 글
│   └── images/
├── posts/       # 기술 블로그 글 (YYYY-MM-DD-<slug>.md) + assets/
├── schema/      # init.cypher(제약조건 17개 · 인덱스 3개), seed-topics.cypher(단원 13개)
└── scripts/     # 시드, 내보내기, 시각화
```

그래프 쓰기 규칙과 학습 세션 흐름은 레포 루트의 [CLAUDE.md](../CLAUDE.md)에 있다.
