# Skill Categories and Duplicates

Complete mapping of skill categories and recommended cleanup actions.

## Category 1: Agent/Skill Creation

**Keep:** `agent-builder`

**Remove:**
- `agent-identifier` - Naming only, covered by agent-builder
- `create-agent-skills` - Duplicate functionality
- `skill-creator` - Similar to agent-builder
- `skill-writer` - Too specific
- `writing-skills` - TDD approach, too specialized

**Command:**
```bash
npx skills remove -g agent-identifier create-agent-skills skill-creator skill-writer writing-skills
```

---

## Category 2: Planning & Execution

**Keep:**
- `planner` - Most complete (13-step + 9-step)
- `subagent-driven-development` - Same-session with two-stage review
- `dispatching-parallel-agents` - Parallel execution
- `brainstorming` - Ideation (different purpose)

**Remove:**
- `executing-plans` - Overlaps with planner
- `writing-plans` - Covered by planner

**Command:**
```bash
npx skills remove -g executing-plans writing-plans
```

---

## Category 3: Debugging

**Keep:** `debugging` (parent skill containing all sub-skills)

**Remove:**
- `systematic-debugging` - Child of debugging
- `root-cause-tracing` - Child of debugging  
- `defense-in-depth` - Child of debugging

**Command:**
```bash
npx skills remove -g systematic-debugging root-cause-tracing defense-in-depth
```

---

## Category 4: Code Review

**Keep all:** Different stages
- `code-review` - General review
- `requesting-code-review` - Request stage
- `receiving-code-review` - Response stage

---

## Category 5: MCP & Hooks

**Keep:**
- `mcp-builder` - Build MCP servers
- `mcp-management` - Client-side management
- `hook-development` - Event hooks (different from MCP)

**Remove:**
- `mcp-integration` - Overlaps with mcp-builder
- `local-skills-mcp-usage` - Too specific

**Command:**
```bash
npx skills remove -g mcp-integration local-skills-mcp-usage
```

---

## Category 6: Frontend/Web

**Keep:**
- `react-best-practices` - React specific
- `web-frameworks` - General web development
- `ui-ux-pro-max` - Comprehensive UI/UX

**Remove:**
- `web-design-guidelines` - Overlaps
- `frontend-design` - Too broad
- `frontend-development` - Too broad

**Command:**
```bash
npx skills remove -g web-design-guidelines frontend-design frontend-development
```

---

## Category 7: Search & Research

**Keep all:** Different sources
- `web-search` - Tavily/Exa
- `perplexity-search` - Perplexity AI
- `context7-auto-research` - Auto documentation
- `docs-seeker` - llms.txt search

---

## Optional Removals (By Use Case)

### If not doing ML training:
```bash
npx skills remove -g llama-cpp vllm pytorch-lightning using-pytorch-engineering trl-fine-tuning peft unsloth mlflow tensorboard weights-and-biases
```

### If not using Expo:
```bash
npx skills remove -g upgrading-expo expo-api-routes
```

### If not doing video:
```bash
npx skills remove -g remotion-best-practices
```

---

## Core Skills to Always Keep

**Essential (~30 skills):**

1. **Development Workflow:**
   - agent-builder, planner, subagent-driven-development
   - dispatching-parallel-agents, brainstorming
   - code-review, requesting-code-review, receiving-code-review
   - debugging, test-driven-development
   - finishing-a-development-branch, using-git-worktrees

2. **MCP/Integration:**
   - mcp-builder, mcp-management, hook-development

3. **Web Development:**
   - react-best-practices, web-frameworks, web-testing
   - ui-ux-pro-max

4. **AI/Search:**
   - model-trainer, llm-models, prompt-engineering-patterns
   - perplexity-search, context7-auto-research

5. **Utilities:**
   - find-skills, docs-seeker, databases
   - learning-by-doing, git-health-check
