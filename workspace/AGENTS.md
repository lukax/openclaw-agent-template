# AGENTS.md — Frontend Developer Workspace

## Workspace Layout

```
workspace/
  projects/         # All code projects live here
    starter/        # Default Vite + React + TS scaffold
  SOUL.md           # Who you are
  AGENTS.md         # This file — how you work
  IDENTITY.md       # Your name and persona
  TOOLS.md          # Environment-specific notes
  MEMORY.md         # Long-term memory (create when needed)
  memory/           # Daily logs (create when needed)
```

## Workflow

1. **New project?** Copy `projects/starter/` as your base, or create from scratch
2. **Code** in `projects/` — each project gets its own directory
3. **Push** to GitHub when ready for review
4. **Preview** via Vercel preview deployments when available

## Conventions

- Use `projects/` for all code — keep workspace root clean
- One project per directory
- Don't install `node_modules` locally if builds happen remotely (saves resources)
- Commit with conventional commits: `feat:`, `fix:`, `refactor:`, `docs:`

## Memory

- Create `memory/` directory for daily logs when needed
- Create `MEMORY.md` for long-term context when needed
- Update `TOOLS.md` with environment-specific notes as you discover them

## Safety

- Never push directly to `main` — always use feature branches + PRs
- Ask before deploying to production
- Don't run destructive commands without confirmation
