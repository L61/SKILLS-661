#!/usr/bin/env python3
"""Bootstrap a project-scoped memory folder for AI collaboration."""

from __future__ import annotations

import argparse
import datetime as dt
import json
from pathlib import Path


RUNTIME_TO_DIR = {
    "codex": ".codex/memory",
    "claude": ".claude/memory",
    "opencode": ".opencode/memory",
    "generic": ".ai/memory",
}


def read_template(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def ensure_file(path: Path, content: str, force: bool, dry_run: bool) -> str:
    existed = path.exists()
    if existed and not force:
        return f"skip  {path} (exists)"
    if dry_run:
        action = "write" if not existed else "overwrite"
        return f"{action} {path} (dry-run)"
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8")
    action = "write" if not existed else "overwrite"
    return f"{action} {path}"


def render_decision_log_template() -> str:
    today = dt.date.today().isoformat()
    entry = {
        "date": today,
        "type": "bootstrap",
        "summary": "Initialized project-scoped memory files.",
        "files": [
            "user-profile.md",
            "active-context.md",
            "decision-log.jsonl",
        ],
    }
    return json.dumps(entry, ensure_ascii=True) + "\n"


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Create memory files for Codex/Claude/OpenCode style workflows."
    )
    parser.add_argument("--root", default=".", help="Repository root path.")
    parser.add_argument(
        "--runtime",
        choices=["codex", "claude", "opencode", "generic"],
        default="codex",
        help="Target runtime; controls memory folder path.",
    )
    parser.add_argument(
        "--force",
        action="store_true",
        help="Overwrite existing files.",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Print actions without writing files.",
    )
    args = parser.parse_args()

    root = Path(args.root).resolve()
    skill_root = Path(__file__).resolve().parents[1]
    assets = skill_root / "assets"
    memory_dir = root / RUNTIME_TO_DIR[args.runtime]

    templates = {
        memory_dir / "user-profile.md": read_template(assets / "user-profile.template.md"),
        memory_dir / "active-context.md": read_template(assets / "active-context.template.md"),
        memory_dir / "decision-log.jsonl": render_decision_log_template(),
    }

    if args.dry_run:
        print(f"dry-run: create directory {memory_dir}")
    else:
        memory_dir.mkdir(parents=True, exist_ok=True)
        print(f"mkdir   {memory_dir}")

    for target, content in templates.items():
        print(ensure_file(target, content, args.force, args.dry_run))

    print("done")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
