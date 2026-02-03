---
name: skill-manager
description: Universal skill manager for all vibe coding tools (Claude Code, OpenCode, Cursor, GitHub Copilot, Windsurf, etc.). Use when user asks to "analyze skills", "clean up skills", "find duplicate skills", "manage skills", "list skills", "backup skills", "remove duplicate skills", or needs to organize skills across multiple AI coding tools. Supports npx installation for universal access.
version: 1.0.0
---

# Skill Manager

Universal skill management for Claude Code, OpenCode, Cursor, and other vibe coding tools.

## Quick Start

```bash
# Install globally
npx skill-manager

# Or use directly
npx skill-manager analyze
```

## Overview

Manages skills across multiple AI coding tools:
- **Claude Code** (`~/.claude/skills/`)
- **OpenCode** (`~/.config/opencode/skills/`)
- **Cursor** (`~/.cursor/skills/`)
- **GitHub Copilot** (`~/.copilot/skills/`)
- **Windsurf**, **Trae**, **Cline**, **Continue**, etc.

## Commands

### 1. Analyze Skills
```bash
npx skill-manager analyze
```
Generates comprehensive report with:
- Skill inventory across all tools
- Duplicate detection
- Category breakdown
- Cleanup recommendations

### 2. Clean Up Duplicates
```bash
npx skill-manager clean
```
Interactive cleanup with safety checks.

### 3. List Skills
```bash
npx skill-manager list
```
List all installed skills.

### 4. Backup
```bash
npx skill-manager backup
```
Backup all skills before cleanup.

## Duplicate Categories

### Agent/Skill Creation (Keep: agent-builder)
- ❌ agent-identifier
- ❌ create-agent-skills
- ❌ skill-creator
- ❌ skill-writer
- ❌ writing-skills

### Planning (Keep: planner + subagent-driven-development)
- ❌ executing-plans
- ❌ writing-plans

### Debugging (Keep: debugging)
- ❌ systematic-debugging
- ❌ root-cause-tracing
- ❌ defense-in-depth

### MCP (Keep: mcp-builder + mcp-management)
- ❌ mcp-integration
- ❌ local-skills-mcp-usage

### Frontend (Keep: react-best-practices + web-frameworks)
- ❌ web-design-guidelines
- ❌ frontend-design
- ❌ frontend-development

## Safety First

**Always backup before cleanup:**
```bash
npx skill-manager backup
```

## Installation

### Option 1: npx (Recommended)
```bash
npx skill-manager
```

### Option 2: Global Install
```bash
npm install -g skill-manager
skill-manager analyze
```

### Option 3: Skill Directory
```bash
git clone https://github.com/L61/skill-manager.git ~/.claude/skills/skill-manager
```

## Core Workflow

<process>
1. Detect installed tools automatically
2. Analyze skills across all tools
3. Identify duplicates by category
4. Generate Markdown report with comparison table
5. Interactive cleanup with backup
6. Project-specific recommendations
</process>

## Features

- ✅ Auto-detects Claude Code, OpenCode, Cursor, Copilot, etc.
- ✅ Cross-tool duplicate detection
- ✅ Interactive comparison tables
- ✅ Project-aware recommendations
- ✅ Automatic backup before cleanup
- ✅ npx support (no installation needed)

## Report Format

Generates Markdown report with:
- Skill inventory table
- Category breakdown
- Duplicate comparison (✓/✗ selectable)
- Project-specific recommendations
- Safe removal commands

## Related

- **find-skills** - Discover new skills
- **agent-builder** - Build custom skills
- **mcp-builder** - Build MCP servers
