#!/bin/bash
# Interactive Skill Analysis

BLUE='\033[0;34m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}   Skill Manager - Analysis${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""

# Detect tool
SKILL_PATH=""
TOOL_NAME=""

if [ -d "$HOME/.claude/skills" ]; then
    SKILL_PATH="$HOME/.claude/skills"
    TOOL_NAME="Claude Code"
elif [ -d "$HOME/.config/opencode/skills" ]; then
    SKILL_PATH="$HOME/.config/opencode/skills"
    TOOL_NAME="OpenCode"
elif [ -d "$HOME/.cursor/skills" ]; then
    SKILL_PATH="$HOME/.cursor/skills"
    TOOL_NAME="Cursor"
else
    echo "No supported tool found"
    exit 1
fi

echo -e "📁 ${YELLOW}Tool:${NC} $TOOL_NAME"
echo -e "📂 ${YELLOW}Path:${NC} $SKILL_PATH"
echo ""

# Count skills
COUNT=$(ls -1 "$SKILL_PATH" 2>/dev/null | wc -l)
echo -e "📊 ${YELLOW}Total Skills:${NC} $COUNT"
echo ""

# Check for duplicates
echo -e "${BLUE}🔍 Checking for Duplicates${NC}"
echo "---------------------------"

# Agent creation
echo ""
echo "1. Agent/Skill Creation:"
ls "$SKILL_PATH" | grep -E "agent|skill" | sed 's/^/   • /'

# Planning
echo ""
echo "2. Planning/Execution:"
ls "$SKILL_PATH" | grep -E "plan|execut|brainstorm" | sed 's/^/   • /'

# Debugging
echo ""
echo "3. Debugging:"
ls "$SKILL_PATH" | grep -E "debug|test" | sed 's/^/   • /'

# MCP
echo ""
echo "4. MCP/Hook:"
ls "$SKILL_PATH" | grep -E "mcp|hook" | sed 's/^/   • /'

# Frontend
echo ""
echo "5. Frontend/Web:"
ls "$SKILL_PATH" | grep -E "react|web|front|ui" | sed 's/^/   • /'

echo ""
echo -e "${BLUE}💡 Recommendations${NC}"
echo "------------------"
echo "   • Keep: agent-builder (remove agent-identifier, skill-creator, etc.)"
echo "   • Keep: planner + subagent-driven-development (remove executing-plans)"
echo "   • Keep: debugging (remove systematic-debugging, etc.)"
echo "   • Keep: mcp-builder + mcp-management (remove mcp-integration)"
echo ""

echo -e "${GREEN}Done!${NC}"
