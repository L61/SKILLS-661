## Local Memory (Project Scoped)

- [RUNTIME_ONLY] Persistent memory is project-scoped under `<memory-dir>/`.
- [RUNTIME_ONLY] For non-trivial tasks, read at task start:
  1. `<memory-dir>/user-profile.md`
  2. `<memory-dir>/active-context.md`
- [RUNTIME_ONLY] Evaluate memory-write triggers at task end.

### Memory Hard Triggers (any 1)

- [RUNTIME_ONLY] New or changed user preference/communication rule.
- [RUNTIME_ONLY] New or changed collaboration protocol.
- [RUNTIME_ONLY] New recurring failure pattern with confirmed mitigation.
- [RUNTIME_ONLY] Product priority changed.

### Memory Soft Triggers (any 2)

- [RUNTIME_ONLY] Change touches 3+ files.
- [RUNTIME_ONLY] Change affects tests or acceptance behavior.
- [RUNTIME_ONLY] Next-step plan materially changed.
- [RUNTIME_ONLY] Existing memory entry became stale or contradictory.

### Memory Required Behavior

- [RUNTIME_ONLY] If triggered, update `active-context.md` and/or `user-profile.md`.
- [RUNTIME_ONLY] If hard trigger matched, append one entry to `decision-log.jsonl`.
- [RUNTIME_ONLY] Final report must include:
  `Memory Update: written|skipped + files + trigger`.
