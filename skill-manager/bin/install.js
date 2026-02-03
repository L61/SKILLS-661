#!/usr/bin/env node
/**
 * Skill Manager Installer
 * Install skill-manager to Claude Code / OpenCode / Cursor via npx
 */

const fs = require('fs');
const path = require('path');
const os = require('os');
const { execSync } = require('child_process');

const colors = {
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

console.log(`${colors.blue}========================================${colors.reset}`);
console.log(`${colors.blue}   Skill Manager Installer${colors.reset}`);
console.log(`${colors.blue}========================================${colors.reset}\n`);

// Detect available tools
const tools = [
  { name: 'Claude Code', path: path.join(os.homedir(), '.claude', 'skills') },
  { name: 'OpenCode', path: path.join(os.homedir(), '.config', 'opencode', 'skills') },
  { name: 'Cursor', path: path.join(os.homedir(), '.cursor', 'skills') },
  { name: 'GitHub Copilot', path: path.join(os.homedir(), '.copilot', 'skills') }
];

const availableTools = tools.filter(tool => {
  // Check if parent directory exists (indicating tool is installed)
  const parentDir = path.dirname(tool.path);
  return fs.existsSync(parentDir);
});

if (availableTools.length === 0) {
  console.log(`${colors.yellow}⚠️  No supported tools detected.${colors.reset}`);
  console.log('Please install Claude Code, OpenCode, Cursor, or Copilot first.\n');
  process.exit(1);
}

console.log(`${colors.blue}📁 Detected tools:${colors.reset}`);
availableTools.forEach((tool, index) => {
  const exists = fs.existsSync(tool.path) ? '✓' : '○';
  console.log(`   ${exists} ${index + 1}. ${tool.name}`);
  console.log(`      ${tool.path}`);
});

console.log('\n');

// For now, install to first available tool
const targetTool = availableTools[0];
const installPath = path.join(targetTool.path, 'skill-manager');

console.log(`${colors.blue}📦 Installing skill-manager...${colors.reset}`);
console.log(`   Target: ${targetTool.name}`);
console.log(`   Path: ${installPath}\n`);

try {
  // Create directory
  if (!fs.existsSync(installPath)) {
    fs.mkdirSync(installPath, { recursive: true });
  }

  // Copy SKILL.md
  const skillMdSource = path.join(__dirname, '..', 'SKILL.md');
  const skillMdTarget = path.join(installPath, 'SKILL.md');
  
  if (fs.existsSync(skillMdSource)) {
    fs.copyFileSync(skillMdSource, skillMdTarget);
    console.log(`${colors.green}✓${colors.reset} SKILL.md`);
  }

  // Copy references
  const refSource = path.join(__dirname, '..', 'references');
  const refTarget = path.join(installPath, 'references');
  
  if (fs.existsSync(refSource)) {
    if (!fs.existsSync(refTarget)) {
      fs.mkdirSync(refTarget, { recursive: true });
    }
    
    const files = fs.readdirSync(refSource);
    files.forEach(file => {
      fs.copyFileSync(
        path.join(refSource, file),
        path.join(refTarget, file)
      );
    });
    console.log(`${colors.green}✓${colors.reset} references/`);
  }

  // Copy scripts
  const scriptsSource = path.join(__dirname, '..', 'scripts');
  const scriptsTarget = path.join(installPath, 'scripts');
  
  if (fs.existsSync(scriptsSource)) {
    if (!fs.existsSync(scriptsTarget)) {
      fs.mkdirSync(scriptsTarget, { recursive: true });
    }
    
    const files = fs.readdirSync(scriptsSource);
    files.forEach(file => {
      fs.copyFileSync(
        path.join(scriptsSource, file),
        path.join(scriptsTarget, file)
      );
    });
    console.log(`${colors.green}✓${colors.reset} scripts/`);
  }

  // Also install CLI globally for convenience
  const cliSource = path.join(__dirname, 'skill-manager.js');
  if (fs.existsSync(cliSource)) {
    console.log(`\n${colors.blue}📎 CLI tool also available:${colors.reset}`);
    console.log('   Run: npx @l61/skill-manager analyze');
  }

  console.log(`\n${colors.green}✅ Installation complete!${colors.reset}\n`);
  
  console.log(`${colors.blue}🚀 Usage:${colors.reset}`);
  console.log('   1. In Claude Code, ask: "分析我的技能"');
  console.log('   2. Or run CLI: npx @l61/skill-manager analyze');
  console.log('');

} catch (error) {
  console.error(`${colors.yellow}❌ Installation failed:${colors.reset}`, error.message);
  process.exit(1);
}
