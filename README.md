# SKILLS-661

Personal Claude Code / OpenCode / Cursor Skills Collection

## 📦 Installation (Standard Way)

**Recommended:** Install via `skills` CLI (from GitHub):

```bash
# Install skill-manager
npx skills add https://github.com/L61/SKILLS-661 --skill skill-manager

# Install skill-publisher  
npx skills add https://github.com/L61/SKILLS-661 --skill skill-publisher

# Install project-memory-autopilot
npx skills add https://github.com/L61/SKILLS-661 --skill project-memory-autopilot
```

This is the **standard way** to install Skills for Claude Code, OpenCode, Cursor, and other agents.

## 🚀 Quick Start

After installation, use in Claude Code:

```
"分析我的技能"           # Uses skill-manager
"帮我发布这个技能"       # Uses skill-publisher
```

## 📚 Skills

### skill-manager
Universal skill manager for vibe coding tools.

**Features:**
- Analyze installed skills
- Detect duplicates
- Interactive cleanup
- Auto-detects multiple tools

**Usage:**
```bash
# Via skills CLI (Recommended)
npx skills add https://github.com/L61/SKILLS-661 --skill skill-manager

# Then in Claude Code:
"分析我的技能"
```

### skill-publisher
Publish and distribute skills to GitHub.

**Features:**
- Validate skill structure
- Step-by-step publish guide
- Pre-flight checklist
- GitHub & npm publishing

**Usage:**
```bash
# Via skills CLI (Recommended)
npx skills add https://github.com/L61/SKILLS-661 --skill skill-publisher

# Then in Claude Code:
"检查我的技能是否可以发布"
```

### project-memory-autopilot
Build and maintain a project-scoped external memory system for AI collaboration.

**Features:**
- Bootstrap project memory files
- Trigger-based memory update policy
- Decision log template and protocol snippets
- Cross-runtime paths (Codex/Claude/OpenCode)

**Usage:**
```bash
# Via skills CLI (Recommended)
npx skills add https://github.com/L61/SKILLS-661 --skill project-memory-autopilot

# Then in your agent:
"Set up project memory for this repo"
```

## 🔧 Advanced: CLI Tools (Optional)

Some skills include CLI tools for command-line usage. These can be installed via npm:

```bash
# Optional: Install CLI tool globally
npm install -g @l61/skill-manager

# Then use directly
skill-manager analyze
```

**Note:** This is **optional**. The standard way is using `npx skills add` above.

## 📁 Adding New Skills

Create new skill directories:

```
SKILLS-661/
├── skill-manager/
├── skill-publisher/
├── project-memory-autopilot/
├── skill-your-new-skill/
│   ├── SKILL.md
│   ├── workflows/
│   ├── references/
│   └── scripts/
└── README.md
```

## 📖 Documentation

- [skill-manager/](skill-manager/) - Skill management
- [skill-publisher/](skill-publisher/) - Publishing guide

## License

MIT
