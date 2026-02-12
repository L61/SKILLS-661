## Local Memory Loop

For non-trivial tasks, run this loop:

1. Start
   - Read `<memory-dir>/user-profile.md`.
   - Read `<memory-dir>/active-context.md`.
2. During execution
   - Track candidate memory updates (durable preferences, workflow changes, recurring issue/fix patterns).
3. End
   - Evaluate memory triggers from routing rules:
     - hard: any 1
     - soft: any 2
   - If triggered:
     - update `<memory-dir>/user-profile.md` and/or `<memory-dir>/active-context.md`
     - append one JSON entry to `<memory-dir>/decision-log.jsonl` for hard-trigger updates
4. Report
   - Include:
     `Memory Update: written|skipped + files + trigger`
