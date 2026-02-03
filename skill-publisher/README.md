# skill-publisher

Publish and distribute Claude Code skills to GitHub and npm.

## ✨ Features

- ✅ **Validate Skills** - Check structure before publishing
- 📦 **Publish Guide** - Step-by-step instructions
- ☑️ **Pre-flight Checklist** - Ensure readiness
- 🚀 **GitHub & npm** - Dual publishing support

## 📦 Installation

### Standard Way (Recommended)

Install via `skills` CLI:

```bash
npx skills add https://github.com/L61/SKILLS-661 --skill skill-publisher
```

### Manual Install

```bash
git clone https://github.com/L61/SKILLS-661.git ~/.claude/skills/SKILLS-661
```

## 🚀 Usage

### In Claude Code / OpenCode

After installation, ask:

```
"检查我的技能是否可以发布"
"帮我发布这个技能"
"如何发布到 npm"
"发布前需要检查什么"
```

### Validation Script

```bash
cd ~/.claude/skills/SKILLS-661/skill-publisher
node scripts/validate.js ../your-skill
```

## 📋 Pre-Publish Checklist

The skill validates:

- [ ] SKILL.md exists with valid YAML frontmatter
- [ ] `name:` matches directory name
- [ ] `description:` present and clear
- [ ] No README.md in skill directory
- [ ] Scripts executable
- [ ] Under 500 lines

## 📄 Files

```
skill-publisher/
├── SKILL.md              # Skill definition
├── workflows/
│   ├── publish-new.md    # First-time publish guide
│   └── validate-skill.md # Validation workflow
├── references/
│   ├── pre-flight-checklist.md
│   ├── github-setup.md
│   └── npm-publishing.md
└── scripts/
    └── validate.js       # Automated validation
```

## 📖 Publishing Guide

### Quick Steps

1. **Validate** - Run `node scripts/validate.js ./your-skill`
2. **GitHub** - Create repo and push
3. **Install** - Users run `npx skills add https://github.com/you/repo --skill your-skill`
4. **npm** (Optional) - Publish for CLI tool usage

### Full Guide

See [workflows/publish-new.md](workflows/publish-new.md) for detailed steps.

## 🎯 When to Use This Skill

- Creating your first skill
- Publishing to GitHub
- Publishing to npm (optional)
- Validating skill structure
- Understanding best practices

## License

MIT
