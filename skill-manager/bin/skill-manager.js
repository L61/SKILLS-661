#!/usr/bin/env node
/**
 * Skill Manager CLI - Cross-platform entry point
 * Works on Windows, Linux, and Mac
 */

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
const os = require('os');

// Get script directory
const scriptDir = path.dirname(__filename);
const analyzeScript = path.join(scriptDir, 'analyze-interactive.sh');
const cliScript = path.join(scriptDir, 'skill-manager-cli');

// Colors for terminal
const colors = {
  red: '\x1b[0;31m',
  green: '\x1b[0;32m',
  yellow: '\x1b[1;33m',
  blue: '\x1b[0;34m',
  cyan: '\x1b[0;36m',
  reset: '\x1b[0m'
};

// Main function
function main() {
  const args = process.argv.slice(2);
  const command = args[0] || 'analyze';

  switch (command) {
    case 'analyze':
      runAnalyze();
      break;
    case 'list':
      runList();
      break;
    case 'backup':
      runBackup();
      break;
    case 'help':
    case '--help':
    case '-h':
      showHelp();
      break;
    default:
      console.log(`Unknown command: ${command}`);
      showHelp();
      process.exit(1);
  }
}

function runAnalyze() {
  console.log(`${colors.blue}========================================${colors.reset}`);
  console.log(`${colors.blue}   Skill Manager - Analysis${colors.reset}`);
  console.log(`${colors.blue}========================================${colors.reset}\n`);

  // Detect tool
  const toolInfo = detectTool();
  if (!toolInfo) {
    console.log(`${colors.red}No supported tool detected${colors.reset}`);
    console.log('Supported: Claude Code, OpenCode, Cursor, Copilot');
    process.exit(1);
  }

  console.log(`${colors.yellow}📁 Tool:${colors.reset} ${toolInfo.name}`);
  console.log(`${colors.yellow}📂 Path:${colors.reset} ${toolInfo.path}\n`);

  // Count skills
  try {
    const skills = fs.readdirSync(toolInfo.path).filter(f => {
      return fs.statSync(path.join(toolInfo.path, f)).isDirectory();
    });
    
    console.log(`${colors.yellow}📊 Total Skills:${colors.reset} ${skills.length}\n`);

    // Check for duplicates
    console.log(`${colors.blue}🔍 Checking for Duplicates${colors.reset}`);
    console.log('---------------------------\n');

    // Agent creation
    console.log('1. Agent/Skill Creation:');
    skills.filter(s => /agent|skill/.test(s)).forEach(s => {
      console.log(`   • ${s}`);
    });

    // Planning
    console.log('\n2. Planning/Execution:');
    skills.filter(s => /plan|execut|brainstorm/.test(s)).forEach(s => {
      console.log(`   • ${s}`);
    });

    // Debugging
    console.log('\n3. Debugging:');
    skills.filter(s => /debug|test/.test(s)).forEach(s => {
      console.log(`   • ${s}`);
    });

    // MCP
    console.log('\n4. MCP/Hook:');
    skills.filter(s => /mcp|hook/.test(s)).forEach(s => {
      console.log(`   • ${s}`);
    });

    // Frontend
    console.log('\n5. Frontend/Web:');
    skills.filter(s => /react|web|front|ui/.test(s)).forEach(s => {
      console.log(`   • ${s}`);
    });

    console.log('\n' + colors.blue + '💡 Recommendations' + colors.reset);
    console.log('------------------');
    console.log('   • Keep: agent-builder (remove agent-identifier, skill-creator, etc.)');
    console.log('   • Keep: planner + subagent-driven-development (remove executing-plans)');
    console.log('   • Keep: debugging (remove systematic-debugging, etc.)');
    console.log('   • Keep: mcp-builder + mcp-management (remove mcp-integration)');
    console.log('');
    console.log(colors.green + 'Done!' + colors.reset);

  } catch (error) {
    console.error(`${colors.red}Error:${colors.reset}`, error.message);
    process.exit(1);
  }
}

function runList() {
  const toolInfo = detectTool();
  if (!toolInfo) {
    console.log(`${colors.red}No supported tool detected${colors.reset}`);
    process.exit(1);
  }

  console.log(`${colors.cyan}Skills in ${toolInfo.name}:${colors.reset}\n`);
  
  try {
    const skills = fs.readdirSync(toolInfo.path).filter(f => {
      return fs.statSync(path.join(toolInfo.path, f)).isDirectory();
    });
    
    skills.sort().forEach(skill => {
      console.log(`  • ${skill}`);
    });
    
    console.log(`\nTotal: ${skills.length} skills`);
  } catch (error) {
    console.log('No skills found');
  }
}

function runBackup() {
  const toolInfo = detectTool();
  if (!toolInfo) {
    console.log(`${colors.red}No supported tool detected${colors.reset}`);
    process.exit(1);
  }

  const backupDir = path.join(os.homedir(), '.skill-manager', 'backups');
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  const backupPath = path.join(backupDir, `backup-${timestamp}`);

  try {
    // Create backup directory
    if (!fs.existsSync(backupPath)) {
      fs.mkdirSync(backupPath, { recursive: true });
    }

    // Copy skills
    const { execSync } = require('child_process');
    
    if (process.platform === 'win32') {
      // Windows
      execSync(`xcopy "${toolInfo.path}" "${backupPath}" /E /I /H`, { stdio: 'inherit' });
    } else {
      // Linux/Mac
      execSync(`cp -r "${toolInfo.path}" "${backupPath}"`, { stdio: 'inherit' });
    }

    console.log(`${colors.green}✅ Backed up to: ${backupPath}${colors.reset}`);
  } catch (error) {
    console.error(`${colors.red}Backup failed:${colors.reset}`, error.message);
    process.exit(1);
  }
}

function detectTool() {
  const tools = [
    { name: 'Claude Code', path: path.join(os.homedir(), '.claude', 'skills') },
    { name: 'OpenCode', path: path.join(os.homedir(), '.config', 'opencode', 'skills') },
    { name: 'Cursor', path: path.join(os.homedir(), '.cursor', 'skills') },
    { name: 'GitHub Copilot', path: path.join(os.homedir(), '.copilot', 'skills') }
  ];

  for (const tool of tools) {
    if (fs.existsSync(tool.path)) {
      return tool;
    }
  }

  return null;
}

function showHelp() {
  console.log(`${colors.blue}Skill Manager${colors.reset} - Universal skill management`);
  console.log('');
  console.log('Usage: skill-manager [command]');
  console.log('');
  console.log('Commands:');
  console.log('  analyze      Analyze installed skills');
  console.log('  list         List all skills');
  console.log('  backup       Backup skills');
  console.log('  help         Show this help');
  console.log('');
  console.log('Examples:');
  console.log('  skill-manager analyze');
  console.log('  skill-manager list');
  console.log('  skill-manager backup');
}

// Run main
main();
