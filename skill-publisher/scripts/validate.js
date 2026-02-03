#!/usr/bin/env node
/**
 * Skill Validator
 * Check if skill is ready for publishing
 */

const fs = require('fs');
const path = require('path');

const skillPath = process.argv[2];

if (!skillPath) {
  console.error('Usage: node validate.js <path-to-skill>');
  process.exit(1);
}

const fullPath = path.resolve(skillPath);

if (!fs.existsSync(fullPath)) {
  console.error(`❌ Path does not exist: ${fullPath}`);
  process.exit(1);
}

const skillName = path.basename(fullPath);
console.log(`🔍 Validating: ${skillName}\n`);

let errors = [];
let warnings = [];

// Check SKILL.md exists
const skillMdPath = path.join(fullPath, 'SKILL.md');
if (!fs.existsSync(skillMdPath)) {
  errors.push('SKILL.md not found');
} else {
  console.log('✓ SKILL.md exists');
  
  const content = fs.readFileSync(skillMdPath, 'utf8');
  
  // Check frontmatter
  const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) {
    errors.push('No YAML frontmatter found');
  } else {
    console.log('✓ Has YAML frontmatter');
    
    // Parse frontmatter
    const frontmatter = frontmatterMatch[1];
    
    // Check name
    const nameMatch = frontmatter.match(/name:\s*(.+)/);
    if (!nameMatch) {
      errors.push('Missing "name:" in frontmatter');
    } else {
      const name = nameMatch[1].trim();
      if (name !== skillName) {
        errors.push(`Name mismatch: frontmatter says "${name}", directory is "${skillName}"`);
      } else {
        console.log('✓ name: matches directory');
      }
    }
    
    // Check description
    const descMatch = frontmatter.match(/description:\s*(.+)/);
    if (!descMatch) {
      errors.push('Missing "description:" in frontmatter');
    } else {
      const desc = descMatch[1].trim();
      if (desc.length < 50) {
        warnings.push('Description is very short (< 50 chars)');
      } else if (desc.length > 500) {
        warnings.push('Description is very long (> 500 chars)');
      } else {
        console.log(`✓ description: present (${desc.length} chars)`);
      }
    }
  }
  
  // Check for markdown headings
  const headingMatches = content.match(/^#{1,3}\s+/gm);
  if (headingMatches) {
    warnings.push(`Uses markdown headings (${headingMatches.length} found). Consider XML tags instead.`);
  }
  
  // Check line count
  const lines = content.split('\n').length;
  if (lines > 500) {
    warnings.push(`SKILL.md is ${lines} lines. Consider moving content to references/.`);
  } else {
    console.log(`✓ ${lines} lines (under 500)`);
  }
}

// Check for forbidden files
const forbiddenFiles = ['README.md', 'CHANGELOG.md', 'INSTALL.md'];
forbiddenFiles.forEach(file => {
  const filePath = path.join(fullPath, file);
  if (fs.existsSync(filePath)) {
    errors.push(`Forbidden file found: ${file}`);
  }
});

// Check scripts
const scriptsPath = path.join(fullPath, 'scripts');
if (fs.existsSync(scriptsPath)) {
  console.log('✓ scripts/ directory exists');
  
  const scripts = fs.readdirSync(scriptsPath);
  scripts.forEach(script => {
    const scriptPath = path.join(scriptsPath, script);
    const stats = fs.statSync(scriptPath);
    
    if (stats.isFile()) {
      // Check if executable (Unix only)
      if (process.platform !== 'win32') {
        const mode = stats.mode;
        const isExecutable = (mode & parseInt('111', 8)) !== 0;
        if (!isExecutable) {
          warnings.push(`Script not executable: ${script} (run: chmod +x)`);
        }
      }
      
      // Check shebang
      const content = fs.readFileSync(scriptPath, 'utf8');
      const firstLine = content.split('\n')[0];
      if (!firstLine.startsWith('#!')) {
        warnings.push(`Script missing shebang: ${script}`);
      }
    }
  });
}

// Summary
console.log('\n' + '='.repeat(50));

if (errors.length === 0 && warnings.length === 0) {
  console.log('✅ All checks passed! Skill is ready for publishing.');
  process.exit(0);
} else {
  if (errors.length > 0) {
    console.log(`\n❌ ERRORS (${errors.length}):`);
    errors.forEach(e => console.log(`  • ${e}`));
  }
  
  if (warnings.length > 0) {
    console.log(`\n⚠️  WARNINGS (${warnings.length}):`);
    warnings.forEach(w => console.log(`  • ${w}`));
  }
  
  console.log('\n' + (errors.length > 0 ? '❌ Fix errors before publishing.' : '⚠️  Review warnings before publishing.'));
  process.exit(errors.length > 0 ? 1 : 0);
}
