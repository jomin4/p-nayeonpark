# relate-os-graph

Claude Code 세션에서 운영체제(OS)를 공부하며 나온 개념·질문·예제를
[relate](https://relatedb.ai/) 임베디드 그래프 DB에 지식 그래프로 쌓는 프로젝트.

## 구조 (예정)

```
relate-os-graph/
├── data/        # os-graph.rl (그래프 DB 파일, git 제외)
├── schema/      # 노드·관계 정의, 초기 Cypher
└── scripts/     # 시드, 내보내기, 시각화
```

## 그래프 스키마

- `(:Topic)-[:HAS_CONCEPT]->(:Concept)`
- `(:Concept)-[:PREREQUISITE_OF]->(:Concept)`
- `(:Concept)-[:CONFUSED_WITH]-(:Concept)`
- `(:Session)-[:COVERED]->(:Concept)`
- `(:Source)-[:EXPLAINS]->(:Concept)`
- `(:Example)-[:ILLUSTRATES]->(:Concept)`
- `(:Question)-[:ABOUT]->(:Concept)`
