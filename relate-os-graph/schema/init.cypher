// relate-os-graph schema (relate 1.2.0)
// 모든 문장은 IF NOT EXISTS라 여러 번 실행해도 안전하다.
// 순서: 제약조건 먼저, 인덱스 나중 (유일성 제약조건이 자기 인덱스를 함께 만든다).

// ---------- 식별자: MERGE 기준이 되는 키 ----------
CREATE CONSTRAINT topic_slug    IF NOT EXISTS FOR (t:Topic)    REQUIRE t.slug IS UNIQUE;
CREATE CONSTRAINT concept_slug  IF NOT EXISTS FOR (c:Concept)  REQUIRE c.slug IS UNIQUE;
CREATE CONSTRAINT session_id    IF NOT EXISTS FOR (s:Session)  REQUIRE s.id IS UNIQUE;
CREATE CONSTRAINT question_id   IF NOT EXISTS FOR (q:Question) REQUIRE q.id IS UNIQUE;
CREATE CONSTRAINT example_id    IF NOT EXISTS FOR (e:Example)  REQUIRE e.id IS UNIQUE;
CREATE CONSTRAINT post_slug     IF NOT EXISTS FOR (p:Post)     REQUIRE p.slug IS UNIQUE;
CREATE CONSTRAINT visual_path   IF NOT EXISTS FOR (v:Visual)   REQUIRE v.path IS UNIQUE;
CREATE CONSTRAINT source_url    IF NOT EXISTS FOR (s:Source)   REQUIRE s.url IS UNIQUE;

// ---------- 필수 속성 ----------
CREATE CONSTRAINT topic_name_nn    IF NOT EXISTS FOR (t:Topic)    REQUIRE t.name IS NOT NULL;
CREATE CONSTRAINT concept_name_nn  IF NOT EXISTS FOR (c:Concept)  REQUIRE c.name IS NOT NULL;
CREATE CONSTRAINT session_date_nn  IF NOT EXISTS FOR (s:Session)  REQUIRE s.date IS NOT NULL;
CREATE CONSTRAINT question_text_nn IF NOT EXISTS FOR (q:Question) REQUIRE q.text IS NOT NULL;
CREATE CONSTRAINT post_title_nn    IF NOT EXISTS FOR (p:Post)     REQUIRE p.title IS NOT NULL;

// ---------- 속성 타입 ----------
CREATE CONSTRAINT concept_level_int   IF NOT EXISTS FOR (c:Concept)  REQUIRE c.level IS :: INTEGER;
CREATE CONSTRAINT question_answered_b IF NOT EXISTS FOR (q:Question) REQUIRE q.answered IS :: BOOLEAN;
CREATE CONSTRAINT post_status_str     IF NOT EXISTS FOR (p:Post)     REQUIRE p.status IS :: STRING;

// ---------- 조회용 인덱스 ----------
CREATE INDEX question_answered IF NOT EXISTS FOR (q:Question) ON (q.answered);
CREATE INDEX post_status       IF NOT EXISTS FOR (p:Post)     ON (p.status);
CREATE FULLTEXT INDEX concept_text IF NOT EXISTS FOR (c:Concept) ON EACH [c.name, c.summary];
