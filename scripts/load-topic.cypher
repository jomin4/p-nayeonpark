// graph-data/<NN>-<topic>.json 하나를 그래프에 넣는 문장.
// 사용: mcp__relate__write_cypher(statement = 이 파일 내용, parameters = {"data": <JSON 파일 내용>})
// 모든 쓰기가 MERGE라 여러 번 실행해도 결과가 같다.
// 다른 단원 파일에 정의된 개념을 참조하면, 그 파일이 먼저 들어가 있어야 관계가 생긴다.
// 그래프를 처음부터 다시 만들 때는 모든 파일을 순서대로 두 번 넣는다(두 번째에 앞쪽 참조가 채워진다).
WITH $data AS d
MATCH (t:Topic {slug: d.topic})
MERGE (s:Session {id: d.session.id})
ON CREATE SET s.createdAt = d.session.date
SET s.date = d.session.date, s.topic = d.topic, s.summary = d.session.summary, s.updatedAt = d.session.date
WITH d, t, s
CALL (d, t) {
  UNWIND d.concepts AS c
  MERGE (n:Concept {slug: c.slug})
  ON CREATE SET n.createdAt = d.session.date
  SET n.name = c.name, n.summary = c.summary, n.level = c.level, n.updatedAt = d.session.date
  MERGE (t)-[:HAS_CONCEPT]->(n)
}
CALL (d) {
  UNWIND d.sources AS x
  MERGE (n:Source {url: x.url})
  ON CREATE SET n.createdAt = d.session.date
  SET n.title = x.title, n.kind = x.kind, n.updatedAt = d.session.date
  WITH n, x
  UNWIND x.describes AS slug
  MATCH (c:Concept {slug: slug})
  MERGE (n)-[:DESCRIBES]->(c)
}
CALL (d) {
  UNWIND d.prerequisites AS r
  MATCH (a:Concept {slug: r.from})
  MATCH (b:Concept {slug: r.to})
  MERGE (a)-[:PREREQUISITE_OF]->(b)
}
CALL (d) {
  UNWIND d.confusedWith AS r
  MATCH (a:Concept {slug: r.a})
  MATCH (b:Concept {slug: r.b})
  MERGE (a)-[x:CONFUSED_WITH]-(b)
  SET x.note = r.note
}
CALL (d) {
  UNWIND d.questions AS q
  MERGE (n:Question {id: q.id})
  ON CREATE SET n.createdAt = d.session.date
  SET n.text = q.text, n.answered = q.answered, n.answer = q.answer, n.updatedAt = d.session.date
  WITH n, q
  UNWIND q.about AS slug
  MATCH (c:Concept {slug: slug})
  MERGE (n)-[:ABOUT]->(c)
}
CALL (d) {
  UNWIND d.examples AS e
  MATCH (c:Concept {slug: e.concept})
  MERGE (n:Example {id: e.id})
  ON CREATE SET n.createdAt = d.session.date
  SET n.kind = e.kind, n.body = e.body, n.updatedAt = d.session.date
  MERGE (n)-[:ILLUSTRATES]->(c)
}
CALL (d) {
  UNWIND d.visuals AS v
  MERGE (n:Visual {path: v.path})
  ON CREATE SET n.createdAt = d.session.date
  SET n.type = v.type, n.caption = v.caption, n.updatedAt = d.session.date
  WITH n, v
  CALL (n, v) {
    UNWIND v.depicts AS slug
    MATCH (c:Concept {slug: slug})
    MERGE (n)-[:DEPICTS]->(c)
  }
  CALL (n, v) {
    UNWIND v.sources AS url
    MATCH (x:Source {url: url})
    MERGE (n)-[:DERIVED_FROM]->(x)
  }
}
CALL (d, s) {
  MERGE (p:Post {slug: d.post.slug})
  ON CREATE SET p.createdAt = d.session.date
  SET p.title = d.post.title, p.status = 'published', p.path = d.post.path, p.updatedAt = d.session.date
  MERGE (s)-[:PRODUCED]->(p)
  WITH p
  CALL (p, d) {
    UNWIND d.post.explains AS slug
    MATCH (c:Concept {slug: slug})
    MERGE (p)-[:EXPLAINS]->(c)
  }
  CALL (p, d) {
    UNWIND d.visuals AS v
    MATCH (n:Visual {path: v.path})
    MERGE (p)-[:EMBEDS]->(n)
  }
  CALL (p, d) {
    UNWIND d.sources AS x
    MATCH (n:Source {url: x.url})
    MERGE (p)-[:CITES]->(n)
  }
}
CALL (t, s) {
  MATCH (t)-[:HAS_CONCEPT]->(c:Concept)
  MERGE (s)-[:COVERED]->(c)
}
RETURN d.topic AS topic, s.id AS session
