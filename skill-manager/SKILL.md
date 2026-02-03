---
name: skill-manager
description: Analyze and clean up duplicate skills across vibe coding tools. Use when user asks to "analyze skills", "clean up skills", "find duplicate skills", "manage skills", "list skills", "backup skills", or "remove duplicate skills". Auto-detects Claude Code, OpenCode, Cursor, Copilot, and other tools. Generates comparison reports and safe removal commands.
---

# Skill Manager

Analyze skill inventory, detect duplicates, and clean up safely across multiple AI coding tools.

## Quick Start

Run the analysis script:

```bash
bash scripts/analyze-interactive.sh
```

## Core Workflow

1. **Detect installed tools** - Automatically find Claude Code, OpenCode, Cursor, etc.
2. **Analyze skills** - Inventory all installed skills
3. **Identify duplicates** - Group by category (see [references/categories.md](references/categories.md))
4. **Generate report** - Create Markdown comparison table
5. **Interactive cleanup** - Remove duplicates with backup

## Commands

### Analyze Skills

```bash
bash scripts/analyze-interactive.sh
```

Analyzes skills and shows:
- Total skill count per tool
- Duplicate categories
- Removal recommendations

### List Skills

```bash
bash scripts/skill-manager-cli list
```

### Backup Skills

```bash
bash scripts/skill-manager-cli backup
```

Backups saved to: `~/.skill-manager/backups/YYYYMMDD_HHMMSS/`

## Duplicate Categories

Major duplicate groups to check:

**Agent Creation** - Keep `agent-builder`, remove others  
**Planning** - Keep `planner` + `subagent-driven-development`  
**Debugging** - Keep `debugging` (parent skill)  
**MCP** - Keep `mcp-builder` + `mcp-management`  
**Frontend** - Keep `react-best-practices` + `web-frameworks`

See [references/categories.md](references/categories.md) for complete mapping.

## Safety Checklist

Before removing skills:

- [ ] Run backup: `bash scripts/skill-manager-cli backup`
- [ ] Review [references/categories.md](references/categories.md)
- [ ] Verify removal commands: `npx skills remove -g [skill-name]`
- [ ] Test after each batch removal

## Detected Tools

Auto-detects skills in:

- `~/.claude/skills/` (Claude Code)
- `~/.config/opencode/skills/` (OpenCode)
- `~/.cursor/skills/` (Cursor)
- `~/.copilot/skills/` (GitHub Copilot)

## Output

Generates Markdown report with:
- Skill inventory table
- Category breakdown  
- Duplicate comparison
- Safe removal commands

Reports saved to: `~/.skill-manager/reports/`
