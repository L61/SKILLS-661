# Validate Skill Structure

Check if a skill is ready for publishing.

<process>

## 1. Check File Structure

Required files:
```
{skill-name}/
├── SKILL.md (required)
└── Optional:
    ├── references/
    ├── scripts/
    └── templates/
```

Forbidden files in skill directory:
- ❌ README.md
- ❌ CHANGELOG.md
- ❌ INSTALLATION_GUIDE.md
- ❌ Any auxiliary documentation

## 2. Validate SKILL.md

Check frontmatter:
```yaml
---
name: {skill-name}          # Must match directory name
description: ...            # Required, clear and concise
---
```

**Description best practices:**
- Third person ("Use when...")
- Include "when to use" triggers
- 100-300 characters ideal
- No quotes around phrases

## 3. Check XML Structure

SKILL.md body should use XML tags:
```xml
<essential_principles>...</essential_principles>
<process>...</process>
<success_criteria>...</success_criteria>
```

Not markdown headings (## Process)

## 4. Validate Scripts

If scripts/ exists:
- Files are executable (chmod +x)
- Have proper shebang (#!/bin/bash or #!/usr/bin/env node)
- No syntax errors

## 5. Check Size

SKILL.md should be under 500 lines.
Large content → move to references/

</process>

<validation_checklist>
- [ ] SKILL.md exists
- [ ] Valid YAML frontmatter
- [ ] name: matches directory
- [ ] description: present (100-300 chars)
- [ ] XML structure (no ## headings)
- [ ] Under 500 lines
- [ ] No README.md in skill dir
- [ ] Scripts executable (if any)
- [ ] references/ for large content
</validation_checklist>

<output_format>
## Validation Report

**Status:** {PASS | NEEDS_FIX}

**Issues Found:**
{list or "None"}

**Recommendations:**
{specific fixes}
</output_format>
