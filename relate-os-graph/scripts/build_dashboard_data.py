"""graph-data/*.json → docs/dashboard/data.js

대시보드가 file:// 로도 열리도록 데이터를 JS 전역 변수(window.OS_GRAPH)로 쓴다.
그래프 DB는 이 JSON 파일들을 그대로 적재했으므로 수치가 같아야 한다.
마지막에 합계를 출력하니 DB 조회 결과와 비교한다.

사용 (relate-os-graph 폴더에서):
    python -I scripts/build_dashboard_data.py
"""
import datetime
import json
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / "docs" / "dashboard" / "data.js"
PREFIX = "../../"  # docs/dashboard/ → relate-os-graph/

AREAS = [
    {"id": 1, "name": "기초", "units": [1, 2]},
    {"id": 2, "name": "프로세스·CPU", "units": [3, 4, 5]},
    {"id": 3, "name": "동시성", "units": [6, 7]},
    {"id": 4, "name": "메모리", "units": [8, 9]},
    {"id": 5, "name": "저장·입출력", "units": [10, 11, 12]},
    {"id": 6, "name": "보호", "units": [13]},
]


def main():
    sys.stdout.reconfigure(encoding="utf-8")
    seed = (ROOT / "schema" / "seed-topics.cypher").read_text(encoding="utf-8")
    seed_rows = re.findall(r"order: (\d+),\s+slug: '([a-z0-9-]+)',\s+name: '([^']+)',\s+summary: '([^']+)'", seed)
    area_of = {u: a["id"] for a in AREAS for u in a["units"]}

    topics, concepts, prereqs, confused = [], {}, set(), {}
    sources, visuals, questions, examples = {}, [], [], []
    depicts, explains, describes = set(), set(), set()

    files = sorted((ROOT / "graph-data").glob("[0-9][0-9]-*.json"))
    by_slug = {}
    for f in files:
        d = json.loads(f.read_text(encoding="utf-8"))
        by_slug[d["topic"]] = d

    for order, slug, name, summary in seed_rows:
        order = int(order)
        d = by_slug.get(slug)
        if not d:
            continue
        levels = [0, 0, 0]
        for c in d["concepts"]:
            concepts[c["slug"]] = {"slug": c["slug"], "name": c["name"], "level": c["level"],
                                   "summary": c["summary"], "unit": order}
            levels[c["level"] - 1] += 1
        for r in d["prerequisites"]:
            prereqs.add((r["from"], r["to"]))
        for r in d["confusedWith"]:
            key = tuple(sorted((r["a"], r["b"])))
            confused.setdefault(key, {"a": key[0], "b": key[1], "note": r["note"], "unit": order})
        for x in d["sources"]:
            s = sources.setdefault(x["url"], {"url": x["url"], "title": x["title"], "kind": x["kind"],
                                              "units": [], "describes": []})
            if order not in s["units"]:
                s["units"].append(order)
            for c in x["describes"]:
                describes.add((x["url"], c))
                if c not in s["describes"]:
                    s["describes"].append(c)
        for v in d["visuals"]:
            visuals.append({"path": PREFIX + v["path"], "type": v["type"], "caption": v["caption"],
                            "unit": order, "depicts": v["depicts"]})
            depicts.update((v["path"], c) for c in v["depicts"])
        for q in d["questions"]:
            questions.append({"id": q["id"], "text": q["text"], "answered": q["answered"],
                              "answer": q["answer"], "unit": order, "about": q["about"]})
        for e in d["examples"]:
            examples.append({"id": e["id"], "concept": e["concept"], "kind": e["kind"], "body": e["body"]})
        explains.update((d["post"]["slug"], c) for c in d["post"]["explains"])
        topics.append({
            "order": order, "slug": slug, "name": name, "summary": summary, "area": area_of[order],
            "post": {"title": d["post"]["title"], "path": PREFIX + d["post"]["path"]},
            "concepts": len(d["concepts"]), "visuals": len(d["visuals"]), "sources": len(d["sources"]),
            "questions": len(d["questions"]),
            "open": sum(1 for q in d["questions"] if not q["answered"]),
            "levels": levels,
        })

    missing = sorted({s for p in prereqs for s in p if s not in concepts})
    if missing:
        sys.exit(f"정의되지 않은 개념 참조: {missing}")

    cross = sum(1 for a, b in prereqs if concepts[a]["unit"] != concepts[b]["unit"])
    totals = {
        "units": len(topics), "concepts": len(concepts), "prerequisites": len(prereqs),
        "crossUnitPrerequisites": cross, "confusedPairs": len(confused), "sources": len(sources),
        "visuals": len(visuals), "questions": len(questions),
        "openQuestions": sum(1 for q in questions if not q["answered"]),
        "examples": len(examples), "describes": len(describes), "depicts": len(depicts),
        "explains": len(explains),
    }
    data = {
        "generatedAt": datetime.date.today().isoformat(),
        "areas": AREAS, "topics": topics,
        "concepts": sorted(concepts.values(), key=lambda c: (c["unit"], c["level"], c["slug"])),
        "prerequisites": sorted([list(p) for p in prereqs]),
        "confused": list(confused.values()),
        "sources": sorted(sources.values(), key=lambda s: (min(s["units"]), s["title"])),
        "visuals": visuals, "questions": questions, "examples": examples, "totals": totals,
    }
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text("window.OS_GRAPH = " + json.dumps(data, ensure_ascii=False, indent=1) + ";\n", encoding="utf-8")
    print(f"wrote {OUT.relative_to(ROOT).as_posix()} ({OUT.stat().st_size:,} bytes)")
    for k, v in totals.items():
        print(f"  {k:24} {v}")


if __name__ == "__main__":
    main()
