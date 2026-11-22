// 학습할 때 자주 쓰는 조회 쿼리 (mcp__relate__read_cypher로 실행)

// 1. 그래프 현황: 라벨별 노드 수
MATCH (n) WITH labels(n)[0] AS label, count(*) AS n RETURN label, n ORDER BY label;

// 2. 관계 종류별 개수
MATCH ()-[r]->() RETURN type(r) AS rel, count(*) AS n ORDER BY rel;

// 3. 학습 경로: 어떤 개념을 이해하려면 무엇부터 봐야 하나 (선수 지식 경로)
MATCH path = (start:Concept)-[:PREREQUISITE_OF]->+(goal:Concept {slug: $goal})
WHERE NOT ()-[:PREREQUISITE_OF]->(start)
RETURN [n IN nodes(path) | n.name] AS learningPath
ORDER BY size(learningPath) DESC;

// 4. 복습 목록: 아직 답을 못 찾은 질문
MATCH (q:Question {answered: false})-[:ABOUT]->(c:Concept)
RETURN q.text AS openQuestion, collect(c.name) AS concepts;

// 5. 헷갈리는 개념 쌍
MATCH (a:Concept)-[r:CONFUSED_WITH]-(b:Concept) WHERE a.slug < b.slug
RETURN a.name AS a, b.name AS b, r.note AS note;

// 6. 단원별 진도: 개념 수와 블로그 글 수
MATCH (t:Topic)
OPTIONAL MATCH (t)-[:HAS_CONCEPT]->(c:Concept)
OPTIONAL MATCH (p:Post)-[:EXPLAINS]->(c)
RETURN t.order AS order, t.name AS topic, count(DISTINCT c) AS concepts, count(DISTINCT p) AS posts
ORDER BY order;

// 7. 전문 검색: 개념 이름·요약에서 단어 찾기 (Cypher 25 SEARCH 절)
//    db.index.fulltext.queryNodes 프로시저는 relate에서 deprecated다.
MATCH (c:Concept)
SEARCH c IN (FULLTEXT INDEX concept_text FOR $term LIMIT 5)
RETURN c.name AS concept;
