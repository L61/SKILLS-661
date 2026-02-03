# Publish New Skill

Publish a skill to GitHub and npm for the first time.

<required_reading>
- references/pre-flight-checklist.md
- references/github-setup.md
- references/npm-publishing.md
</required_reading>

<process>

## Step 1: Validate Skill Structure

Run validation script:
```bash
node scripts/validate.js {skill-path}
```

**Must pass:**
- ✓ SKILL.md exists with valid YAML frontmatter
- ✓ name: matches directory name
- ✓ description: present and clear
- ✓ No auxiliary files (README.md in skill dir)
- ✓ Scripts executable

## Step 2: Prepare for GitHub

<decision>
Does skill need to be part of a collection?

**Option A: Standalone skill**
```
repo: my-skill/
├── SKILL.md
├── references/
└── scripts/
```

**Option B: Skills collection**
```
repo: SKILLS-661/
├── README.md
└── my-skill/
    ├── SKILL.md
    ├── references/
    └── scripts/
```
</decision>

Initialize git:
```bash
cd {skill-path}
git init
git add .
git commit -m "Initial release: {skill-name} v1.0.0

- Add SKILL.md with core functionality
- Add scripts/ for executable code
- Add references/ for documentation
- Ready for distribution"
```

## Step 3: Create GitHub Repository

Using GitHub CLI:
```bash
gh repo create {repo-name} --public \
  --description "{skill-description}" \
  --source=. \
  --remote=origin \
  --push
```

Or manually at github.com.

## Step 4: Add npm Support (Optional)

If skill includes CLI tool:

Create package.json:
```json
{
  "name": "@{scope}/{package-name}",
  "version": "1.0.0",
  "description": "{package-description}",
  "bin": {
    "{command}": "scripts/{script-file}"
  },
  "files": [
    "scripts/",
    "references/",
    "SKILL.md"
  ],
  "keywords": ["claude-code", "skills"],
  "license": "MIT"
}
```

## Step 5: Publish to npm

```bash
npm login
npm publish --access public
```

## Step 6: Test Installation

Test skills CLI:
```bash
npx skills add https://github.com/{owner}/{repo} --skill {skill-name} -y
```

Test npm (if applicable):
```bash
npx @{scope}/{package-name} --help
```

</process>

<success_criteria>
- ✓ GitHub repo exists with all files
- ✓ npm package published (if CLI included)
- ✓ `npx skills add` works
- ✓ `npx {package}` works (if applicable)
</success_criteria>

<output>
## Publication Summary

**GitHub:** https://github.com/{owner}/{repo}
**npm:** https://www.npmjs.com/package/@{scope}/{package-name}

**Installation:**
```bash
# Via skills CLI
npx skills add https://github.com/{owner}/{repo} --skill {skill-name}

# Via npm (if CLI tool)
npx @{scope}/{package-name}
```
</output>
