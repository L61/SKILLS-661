# skill-manager

Universal skill manager for Claude Code, OpenCode, Cursor, and other vibe coding tools.

## ✨ Features

- 📊 **Analyze** - Inventory all installed skills
- 🔍 **Detect Duplicates** - Group by category (Agent, Planning, Debug, MCP, Frontend)
- 🧹 **Clean Up** - Safe removal with backup
- 🔧 **Multi-Tool** - Supports Claude Code, OpenCode, Cursor, Copilot, etc.

## 📦 Installation

### Standard Way (Recommended)

Install via `skills` CLI from GitHub:

```bash
npx skills add https://github.com/L61/SKILLS-661 --skill skill-manager
```

This works with:
- ✅ Claude Code
- ✅ OpenCode
- ✅ Cursor
- ✅ GitHub Copilot
- ✅ And 35+ other agents

### Manual Install

```bash
# Clone to your skills directory
git clone https://github.com/L61/SKILLS-661.git ~/.claude/skills/SKILLS-661

# Or for OpenCode
git clone https://github.com/L61/SKILLS-661.git ~/.config/opencode/skills/SKILLS-661
```

## 🚀 Usage

### In Claude Code / OpenCode

After installation, simply ask:

```
"分析我的技能"
"找出重复的技能"
"清理我的技能"
"备份我的技能"
```

### Direct CLI (Optional)

If you installed the CLI tool:

```bash
# Analyze
skill-manager analyze

# List all skills
skill-manager list

# Backup
skill-manager backup
```

**Note:** CLI is optional. The skill works without it via `npx skills add`.

## 📋 Example Output

```
📁 Tool: Claude Code
📂 Path: ~/.claude/skills

📊 Total Skills: 77

🔍 Checking for Duplicates
---------------------------
1. Agent/Skill Creation:
   • agent-builder
   • agent-identifier
   • skill-creator
   • ...

💡 Recommendations
------------------
   • Keep: agent-builder
   • Remove: agent-identifier, skill-creator
```

## 🔍 Duplicate Categories

The skill detects these common duplicates:

- **Agent Creation** - Keep `agent-builder`, remove others
- **Planning** - Keep `planner` + `subagent-driven-development`  
- **Debugging** - Keep `debugging` (parent skill)
- **MCP** - Keep `mcp-builder` + `mcp-management`
- **Frontend** - Keep `react-best-practices` + `web-frameworks`

See [references/categories.md](references/categories.md) for complete mapping.

## 🔧 Supported Tools

Auto-detects skills in:
- `~/.claude/skills/` (Claude Code)
- `~/.config/opencode/skills/` (OpenCode)
- `~/.cursor/skills/` (Cursor)
- `~/.copilot/skills/` (GitHub Copilot)

## 📄 Files

```
skill-manager/
├── SKILL.md              # Core skill definition
├── references/
│   └── categories.md     # Duplicate categories reference
└── scripts/
    ├── analyze-interactive.sh
    └── skill-manager-cli
```

## License

MIT
