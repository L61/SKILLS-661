# SKILLS-661

Personal Claude Code / OpenCode / Cursor Skills Collection

## Skills

### skill-manager
Universal skill manager for all vibe coding tools (Claude Code, OpenCode, Cursor, Copilot, etc.)

- Analyze installed skills
- Detect duplicates
- Interactive cleanup
- Auto-detects multiple tools

**Usage:**
```bash
cd skill-manager
bash bin/skill-manager analyze
```

**Or with npx (after npm publish):**
```bash
npx skill-manager analyze
```

## Installation

```bash
# Clone to your skills directory
git clone https://github.com/L61/skill-manager.git ~/.claude/skills/SKILLS-661

# Or for OpenCode
git clone https://github.com/L61/skill-manager.git ~/.config/opencode/skills/SKILLS-661
```

## Adding New Skills

Create new skill directories under this collection:

```
SKILLS-661/
├── skill-manager/
├── skill-your-new-skill/
│   ├── SKILL.md
│   ├── README.md
│   └── ...
└── README.md
```

## License

MIT
