"""graph-data/*.json 검증기.

사용:
    python -I scripts/validate_topic.py graph-data/02-os-structure.json [다른 파일 ...]
    python -I scripts/validate_topic.py --all

검사 항목: 필수 키, slug 형식, 값 범위, 파일 존재, 참조 무결성, 다른 단원과의 개념 중복.
오류가 있으면 exit 1. 다른 단원에서 아직 정의되지 않은 개념 참조는 경고로만 알린다.
"""
import json
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent          # 레포 루트
DATA = ROOT / "graph-data"
SLUG = re.compile(r"^[a-z0-9]+(-[a-z0-9]+)*$")
SESSION_ID = re.compile(r"^\d{4}-\d{2}-\d{2}-\d{2}$")
DATE = re.compile(r"^\d{4}-\d{2}-\d{2}$")
SOURCE_KINDS = {"doc", "blog", "video", "book", "paper"}
VISUAL_TYPES = {"diagram", "chart", "animation", "image"}
EXAMPLE_KINDS = {"code", "analogy"}
TOP_KEYS = ["topic", "session", "concepts", "prerequisites", "confusedWith",
            "questions", "examples", "sources", "visuals", "post"]


def topic_slugs():
    seed = (ROOT / "schema" / "seed-topics.cypher").read_text(encoding="utf-8")
    return re.findall(r"slug: '([a-z0-9-]+)'", seed)


def load(path):
    return json.loads(pathlib.Path(path).read_text(encoding="utf-8"))


def validate(path, all_files):
    errors, warnings = [], []
    err = errors.append
    warn = warnings.append
    try:
        d = load(path)
    except Exception as e:  # noqa: BLE001
        return [f"JSON 파싱 실패: {e}"], []

    for k in TOP_KEYS:
        if k not in d:
            err(f"최상위 키 없음: {k}")
    if errors:
        return errors, warnings

    topics = topic_slugs()
    if d["topic"] not in topics:
        err(f"topic '{d['topic']}' 이 seed-topics.cypher에 없음")
    order = topics.index(d["topic"]) + 1 if d["topic"] in topics else None
    expected_name = f"{order:02d}-{d['topic']}.json" if order else None
    if expected_name and pathlib.Path(path).name != expected_name:
        err(f"파일 이름은 {expected_name} 이어야 함")

    s = d["session"]
    if not SESSION_ID.match(s.get("id", "")):
        err("session.id 형식은 YYYY-MM-DD-NN")
    elif order and not s["id"].endswith(f"-{order:02d}"):
        err(f"session.id 끝자리는 단원 번호 {order:02d} 이어야 함")
    if not DATE.match(s.get("date", "")):
        err("session.date 형식은 YYYY-MM-DD")
    if not s.get("summary"):
        err("session.summary 비어 있음")

    # 이 파일의 개념
    own = {}
    for c in d["concepts"]:
        slug = c.get("slug", "")
        if not SLUG.match(slug):
            err(f"concept slug 형식 오류: '{slug}'")
        if slug in own:
            err(f"concept 중복: {slug}")
        own[slug] = c
        if not c.get("name"):
            err(f"{slug}: name 비어 있음")
        if c.get("level") not in (1, 2, 3):
            err(f"{slug}: level은 1·2·3 중 하나")
        if not c.get("summary"):
            err(f"{slug}: summary 비어 있음")
    if not own:
        err("concepts가 비어 있음")

    # 다른 단원 파일의 개념
    others = {}
    for f in all_files:
        if pathlib.Path(f).resolve() == pathlib.Path(path).resolve():
            continue
        try:
            for c in load(f).get("concepts", []):
                others.setdefault(c["slug"], pathlib.Path(f).name)
        except Exception:  # noqa: BLE001
            pass
    for slug in own:
        if slug in others:
            err(f"concept '{slug}' 이 {others[slug]} 에도 정의됨 (개념은 한 단원만 소유)")
    known = set(own) | set(others)

    def ref(slug, where):
        if slug in own:
            return
        if slug in others:
            return
        warn(f"{where}: '{slug}' 는 어느 단원 파일에도 아직 정의되지 않음 (오타가 아닌지 확인)")

    for r in d["prerequisites"]:
        ref(r.get("from", ""), "prerequisites.from")
        ref(r.get("to", ""), "prerequisites.to")
        if r.get("from") == r.get("to"):
            err(f"prerequisite 자기 참조: {r}")
        if r.get("from") not in own and r.get("to") not in own:
            err(f"prerequisite {r} 의 양 끝이 모두 이 단원 밖")
    for r in d["confusedWith"]:
        ref(r.get("a", ""), "confusedWith.a")
        ref(r.get("b", ""), "confusedWith.b")
        if not r.get("note"):
            err(f"confusedWith {r.get('a')}–{r.get('b')}: note 비어 있음")

    for q in d["questions"]:
        qid = q.get("id", "")
        if not qid.startswith(s.get("id", "") + "-q"):
            err(f"question id '{qid}' 는 '<session id>-qN' 형식이어야 함")
        if not isinstance(q.get("answered"), bool):
            err(f"{qid}: answered는 true/false")
        if q.get("answered") and not q.get("answer"):
            err(f"{qid}: answered=true 인데 answer가 없음")
        if not q.get("answered") and q.get("answer") is not None:
            err(f"{qid}: answered=false 이면 answer는 null")
        if not q.get("about"):
            err(f"{qid}: about 비어 있음")
        for slug in q.get("about", []):
            ref(slug, f"{qid}.about")

    for e in d["examples"]:
        eid, concept = e.get("id", ""), e.get("concept", "")
        if not re.match(rf"^{re.escape(concept)}-ex\d+$", eid):
            err(f"example id '{eid}' 는 '<concept>-exN' 형식이어야 함")
        if e.get("kind") not in EXAMPLE_KINDS:
            err(f"{eid}: kind는 code·analogy")
        if not e.get("body"):
            err(f"{eid}: body 비어 있음")
        ref(concept, f"{eid}.concept")

    urls = set()
    for x in d["sources"]:
        url = x.get("url", "")
        if not url.startswith("https://"):
            err(f"source url은 https: {url}")
        urls.add(url)
        if x.get("kind") not in SOURCE_KINDS:
            err(f"{url}: kind는 {sorted(SOURCE_KINDS)}")
        if not x.get("title"):
            err(f"{url}: title 비어 있음")
        for slug in x.get("describes", []):
            ref(slug, f"source.describes")
    if len(d["sources"]) < 2:
        err("source는 2개 이상")

    prefix = f"posts/assets/{d['topic']}/"
    for v in d["visuals"]:
        p = v.get("path", "")
        if not p.startswith(prefix) or not p.endswith(".png"):
            err(f"visual path는 {prefix}<name>.png: {p}")
        if not (ROOT / p).is_file():
            err(f"visual 파일 없음: {p}")
        html = (ROOT / p).with_suffix(".html")
        if not html.is_file():
            err(f"visual 원본 HTML 없음: {html.relative_to(ROOT).as_posix()}")
        if v.get("type") not in VISUAL_TYPES:
            err(f"{p}: type은 {sorted(VISUAL_TYPES)}")
        if not v.get("caption"):
            err(f"{p}: caption 비어 있음")
        for slug in v.get("depicts", []):
            ref(slug, f"{p}.depicts")
        for u in v.get("sources", []):
            if u not in urls:
                err(f"{p}: sources의 {u} 가 이 파일 sources에 없음")
    if len(d["visuals"]) < 2:
        err("visual은 2개 이상")

    post = d["post"]
    if not SLUG.match(post.get("slug", "")):
        err("post.slug 형식 오류")
    if not post.get("title"):
        err("post.title 비어 있음")
    pp = post.get("path", "")
    if not re.match(r"^posts/\d{4}-\d{2}-\d{2}-[a-z0-9-]+\.md$", pp):
        err("post.path는 posts/YYYY-MM-DD-<slug>.md")
    elif not (ROOT / pp).is_file():
        err(f"post 파일 없음: {pp}")
    else:
        text = (ROOT / pp).read_text(encoding="utf-8")
        for v in d["visuals"]:
            rel = v["path"].removeprefix("posts/")
            if rel not in text:
                err(f"post 본문에 visual {rel} 이 삽입되어 있지 않음")
        for x in d["sources"]:
            if x["url"] not in text:
                err(f"post 참고 자료에 {x['url']} 가 없음")
    for slug in post.get("explains", []):
        ref(slug, "post.explains")
    missing = set(own) - set(post.get("explains", []))
    if missing:
        warn(f"post.explains에 빠진 이 단원 개념: {sorted(missing)}")

    return errors, warnings


def main(argv):
    sys.stdout.reconfigure(encoding="utf-8")
    all_files = sorted(str(p) for p in DATA.glob("[0-9][0-9]-*.json"))
    targets = all_files if argv == ["--all"] else argv
    if not targets:
        print(__doc__)
        return 2
    failed = False
    for t in targets:
        errors, warnings = validate(t, all_files)
        name = pathlib.Path(t).name
        if errors:
            failed = True
            print(f"FAIL {name}")
            for e in errors:
                print(f"  error: {e}")
        else:
            print(f"OK   {name}")
        for w in warnings:
            print(f"  warn:  {w}")
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
