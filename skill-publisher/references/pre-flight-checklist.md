# Pre-Flight Checklist

Complete before publishing.

## Content Checklist

### SKILL.md
- [ ] **Frontmatter valid:**
  ```yaml
  ---
  name: skill-name
  description: Clear description of what and when
  ---
  ```
  
- [ ] **Name conventions:**
  - Lowercase with hyphens
  - Matches directory name
  - 3-50 characters
  
- [ ] **Description quality:**
  - Third person ("Use when...")
  - Includes trigger phrases
  - 100-300 characters
  - No quotes around examples

### File Structure
- [ ] SKILL.md in root
- [ ] scripts/ for executables
- [ ] references/ for docs
- [ ] No README.md in skill dir
- [ ] No auxiliary files

### Code Quality
- [ ] Scripts executable
- [ ] No syntax errors
- [ ] Tested locally
- [ ] Under 500 lines (SKILL.md)

## GitHub Checklist

- [ ] Repo name decided
- [ ] Description written
- [ ] Public visibility
- [ ] License chosen (MIT recommended)

## npm Checklist (if CLI)

- [ ] package.json valid
- [ ] name: @{scope}/{name}
- [ ] bin: entry point defined
- [ ] files: whitelist correct
- [ ] npm account ready
- [ ] 2FA configured

## Testing Checklist

- [ ] `npx skills add` works
- [ ] `npx package-name` works (if CLI)
- [ ] Skill triggers correctly
- [ ] All functions work

## Common Mistakes

**❌ Bad description:**
```yaml
description: "A skill for doing things"  # Too vague, uses quotes
```

**✓ Good description:**
```yaml
description: Analyze git history and generate changelogs. Use when user asks to create release notes, generate changelog, or summarize commits.
```

**❌ Markdown headings:**
```markdown
## Process
1. Step one
2. Step two
```

**✓ XML tags:**
```xml
<process>
1. Step one
2. Step two
</process>
```

**❌ Skill directory README:**
```
skill-name/
├── README.md  ← Don't do this
└── SKILL.md
```

**✓ Collection README only:**
```
SKILLS-661/
├── README.md  ← OK here (collection level)
└── skill-name/
    └── SKILL.md
```
