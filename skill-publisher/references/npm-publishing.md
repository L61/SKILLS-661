# npm Publishing Guide

Publish skill as npm package for npx installation.

## When to Publish to npm

**Publish if:**
- Skill includes CLI tool
- Want `npx skill-name` usage
- Non-Claude Code users need access

**Skip if:**
- Pure SKILL (no CLI)
- Only for Claude Code ecosystem
- Prefer git-only distribution

## package.json Template

```json
{
  "name": "@{scope}/{package-name}",
  "version": "1.0.0",
  "description": "CLI tool description",
  "main": "bin/entry.js",
  "bin": {
    "{command}": "bin/entry.js"
  },
  "scripts": {
    "test": "node bin/entry.js --help"
  },
  "keywords": [
    "claude-code",
    "skills",
    "cli",
    "{domain-specific}"
  ],
  "author": "Your Name",
  "license": "MIT",
  "engines": {
    "node": ">=14.0.0"
  },
  "files": [
    "bin/",
    "scripts/",
    "references/",
    "SKILL.md"
  ],
  "repository": {
    "type": "git",
    "url": "https://github.com/{owner}/{repo}.git"
  }
}
```

## Field Reference

| Field | Required | Description |
|-------|----------|-------------|
| name | ✓ | @{scope}/{name} for scoped packages |
| version | ✓ | Semantic version (1.0.0) |
| description | ✓ | For npm search |
| bin | ✗ | CLI command mapping |
| files | ✓ | Whitelist for publish |
| keywords | ✗ | Searchability |

## Publishing Steps

### 1. Login

```bash
npm login
# Follow prompts for username, password, 2FA
```

### 2. Dry Run

```bash
npm publish --dry-run
# Check what will be included
```

### 3. Publish

```bash
# First time - must specify access
npm publish --access public

# Updates (after version bump)
npm version patch  # 1.0.0 → 1.0.1
npm publish
```

### 4. Verify

```bash
# Check npm page
open https://www.npmjs.com/package/@{scope}/{package-name}

# Test installation
npx @{scope}/{package-name} --help
```

## Version Management

```bash
# Patch: bug fixes
npm version patch  # 1.0.0 → 1.0.1

# Minor: new features
npm version minor  # 1.0.0 → 1.1.0

# Major: breaking changes
npm version major  # 1.0.0 → 2.0.0

# Then publish
npm publish
```

## Common Issues

**E403: Forbidden**
- Package name taken
- Not logged in
- No publish permission

**E404: Not found**
- Scope doesn't exist (@scope)
- Typo in package name

**E400: Invalid**
- Invalid version
- Invalid characters in name
- Malformed package.json

## Scoped vs Unscoped

**Scoped (@scope/name):**
```json
{
  "name": "@myorg/skill-manager"
}
```
- Requires --access public for first publish
- Better for organizations
- Prevents name collisions

**Unscoped (name):**
```json
{
  "name": "skill-manager"
}
```
- First-come-first-served names
- Harder to get short names

## Unpublishing

**Within 72 hours:**
```bash
npm unpublish @{scope}/{package-name} --force
```

**After 72 hours:**
- Cannot fully unpublish
- Can deprecate:
```bash
npm deprecate @{scope}/{package-name} "Use @scope/new-name instead"
```

## Best Practices

1. **Always use --access public for scoped packages**
2. **Test before publishing** (dry-run)
3. **Follow semver** (semver.org)
4. **Include all necessary files** in "files"
5. **Don't include:** node_modules, .git, tests
6. **Keep package.json minimal** in skill directory
