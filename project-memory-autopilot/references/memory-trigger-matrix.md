# Memory Trigger Matrix

Use this matrix to decide whether to write memory updates at task end.

## Hard Triggers (any 1)

- New or changed user preference/communication rule.
- New or changed collaboration protocol.
- New recurring failure pattern with a confirmed mitigation strategy.
- Product priority or quality gate changed.

Result:
- Write memory updates.
- Append one decision entry to `decision-log.jsonl`.

## Soft Triggers (any 2)

- Change touches 3 or more files.
- Change affects tests or acceptance behavior.
- Next-step plan materially changed.
- Existing memory entry is stale or contradictory.

Result:
- Write memory updates.
- Decision log append is optional unless it is a key decision.

## No Trigger

If no hard trigger and fewer than 2 soft triggers:
- Skip memory write.
- Explicitly report:
  `Memory Update: skipped + reason`

## Final Report Requirement

Always include one line:

`Memory Update: written|skipped + files + trigger`
