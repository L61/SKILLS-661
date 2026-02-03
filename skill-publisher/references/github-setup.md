# GitHub Repository Setup

Create and configure GitHub repo for skill distribution.

## Repository Options

### Option 1: Standalone Skill
**Best for:** Single skill, simple distribution

```
my-skill/
├── .git/
├── .github/
│   └── workflows/      # Optional: CI/CD
├── SKILL.md
├── references/
├── scripts/
└── README.md           # Collection-level only
```

**Pros:**
- Clean, simple
- Easy to discover
- Direct installation

**Cons:**
- One repo per skill
- More repos to manage

### Option 2: Skills Collection
**Best for:** Multiple related skills

```
SKILLS-661/
├── .git/
├── README.md           # Collection overview
├── skill-one/
│   ├── SKILL.md
│   └── ...
└── skill-two/
    ├── SKILL.md
    └── ...
```

**Pros:**
- Group related skills
- Single repo to maintain
- Shared references possible

**Cons:**
- Must specify skill with --skill flag
- Larger repo size

## Creating Repository

### Using GitHub CLI (recommended)

```bash
# Standalone
cd my-skill
gh repo create my-skill \
  --public \
  --description "Brief description of what this skill does" \
  --source=. \
  --remote=origin \
  --push

# Collection
cd SKILLS-661
gh repo create SKILLS-661 \
  --public \
  --description "Collection of Claude Code skills" \
  --source=. \
  --remote=origin \
  --push
```

### Using Web Interface

1. Go to github.com/new
2. Repository name: {skill-name} or {collection-name}
3. Description: Clear, concise
4. Public visibility
5. Initialize: Don't (we push existing)
6. Create repository
7. Follow push instructions

## README Content

### Standalone Skill
Minimal or none. SKILL.md is the entry point.

### Collection
```markdown
# {Collection Name}

Brief description of the collection.

## Skills

### {skill-one}
{One-line description}

### {skill-two}
{One-line description}

## Installation

```bash
npx skills add https://github.com/{owner}/{repo} --skill {skill-name}
```

## License

MIT
```

## Initial Commit

```bash
git init
git add .
git commit -m "Initial release: {skill-name} v1.0.0

- Add SKILL.md with core functionality
- Add scripts/ for {purpose}
- Add references/ for {documentation}
- Ready for distribution"

git branch -M main
git remote add origin https://github.com/{owner}/{repo}.git
git push -u origin main
```

## Tags/Releases

Optional but recommended:

```bash
git tag -a v1.0.0 -m "Release v1.0.0"
git push origin v1.0.0
```

## Topics

Add GitHub topics for discoverability:
- `claude-code`
- `skills`
- `ai-coding`
- `vibe-coding`
- `{specific-domain}`

Go to repo → About → Topics
