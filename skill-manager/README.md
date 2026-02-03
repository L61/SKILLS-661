# Skill Manager

Universal skill manager for all vibe coding tools.

## Supported Tools

- Claude Code
- OpenCode
- Cursor
- GitHub Copilot
- Windsurf
- Trae
- Cline
- Continue
- And more...

## Quick Start

```bash
# Use without installing
npx skill-manager analyze

# Or install globally
npm install -g skill-manager
skill-manager analyze
```

## Commands

| Command | Description |
|---------|-------------|
| `analyze` | Generate skill analysis report |
| `clean` | Interactive cleanup |
| `list` | List all skills |
| `backup` | Backup skills |
| `help` | Show help |

## Features

- 🔍 Auto-detects all installed vibe coding tools
- 📊 Analyzes skills across multiple tools
- 🔍 Detects duplicates by category
- 📄 Generates Markdown comparison reports
- 🧹 Safe interactive cleanup
- 💾 Automatic backup

## Example

```bash
$ npx skill-manager analyze

📊 Skill Analysis Report
----------------------------
Tools: Claude Code, OpenCode
Total Skills: 76

🔍 Duplicates Found:
- Agent Creation: agent-builder, skill-creator, skill-writer
  Recommendation: Keep agent-builder

Report saved to: ~/.skill-manager/reports/...
```

## License

MIT
