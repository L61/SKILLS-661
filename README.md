# SKILLS-661

Personal Claude Code / OpenCode / Cursor Skills Collection

---

## Installation

Install via `skills` CLI:

```bash
# Install skill-manager
npx skills add https://github.com/L61/SKILLS-661 --skill skill-manager

# Install skill-publisher
npx skills add https://github.com/L61/SKILLS-661 --skill skill-publisher

# Install project-memory-autopilot
npx skills add https://github.com/L61/SKILLS-661 --skill project-memory-autopilot

# Install stardust-lumos-ui
npx skills add https://github.com/L61/SKILLS-661 --skill stardust-lumos-ui
```

---

## Quick Start

After installation, use in Claude Code:

```
"分析我的技能"           # Uses skill-manager
"帮我发布这个技能"       # Uses skill-publisher
```

---

## Skills

### skill-manager

Universal skill manager for vibe coding tools.

**Features:**
- Analyze installed skills
- Detect duplicates
- Interactive cleanup
- Auto-detects multiple tools

**Usage:**
```bash
npx skills add https://github.com/L61/SKILLS-661 --skill skill-manager
```

Then in Claude Code:
```
"分析我的技能"
```

---

### skill-publisher

Publish and distribute skills to GitHub.

**Features:**
- Validate skill structure
- Step-by-step publish guide
- Pre-flight checklist
- GitHub and npm publishing

**Usage:**
```bash
npx skills add https://github.com/L61/SKILLS-661 --skill skill-publisher
```

Then in Claude Code:
```
"检查我的技能是否可以发布"
```

---

### project-memory-autopilot

Build and maintain a project-scoped external memory system for AI collaboration.

**Features:**
- Bootstrap project memory files
- Trigger-based memory update policy
- Decision log template and protocol snippets
- Cross-runtime paths (Codex/Claude/OpenCode)

**Usage:**
```bash
npx skills add https://github.com/L61/SKILLS-661 --skill project-memory-autopilot
```

Then in your agent:
```
"Set up project memory for this repo"
```

---

### stardust-lumos-ui

Deep space themed UI with liquid glass design.

**Features:**
- Deep universe background gradient
- Breathing cosmic dust particles
- Liquid glass card design
- Complete CSS and HTML templates

**Usage:**
```bash
npx skills add https://github.com/L61/SKILLS-661 --skill stardust-lumos-ui
```

Then in Claude Code:
```
"使用星尘流光主题创建页面"
```

---

## Advanced: CLI Tools (Optional)

Some skills include CLI tools for command-line usage:

```bash
# Optional: Install CLI tool globally
npm install -g @l61/skill-manager

# Then use directly
skill-manager analyze
```

Note: This is optional. The standard way is using `npx skills add` above.

---

## Adding New Skills

Create new skill directories:

```
SKILLS-661/
├── skill-manager/
├── skill-publisher/
├── project-memory-autopilot/
├── stardust-lumos-ui/
├── skill-your-new-skill/
│   ├── SKILL.md
│   ├── workflows/
│   ├── references/
│   └── scripts/
└── README.md
```

---

## Documentation

- [skill-manager/](skill-manager/) - Skill management
- [skill-publisher/](skill-publisher/) - Publishing guide
- [stardust-lumos-ui/](stardust-lumos-ui/) - UI design system

---

## License

MIT
