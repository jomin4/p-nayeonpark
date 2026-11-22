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

## 폴더 구조

```
relate-os-graph/
├── data/        # os-graph.rl (그래프 DB 파일, git 제외)
├── docs/        # 아키텍처·설계 문서, 시각화 자료, 블로그 글
│   └── images/
├── schema/      # 노드·관계 정의, 초기 Cypher
└── scripts/     # 시드, 내보내기, 시각화
```
