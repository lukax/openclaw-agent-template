# OpenClaw Frontend Agent Template

A template for creating an OpenClaw agent specialized in frontend development with Vite + React + TypeScript.

## Structure

```
workspace/
  SOUL.md              # Agent personality and principles
  AGENTS.md            # Workspace conventions and workflow
  IDENTITY.md          # Agent name and persona
  TOOLS.md             # Environment-specific notes
  projects/
    starter/           # Vite + React + TypeScript scaffold
      package.json
      vite.config.ts
      tsconfig.json
      index.html
      src/
        main.tsx
        App.tsx
        App.module.css
        index.css
```

## Lifecycle Scripts

The `manifest.json` defines lifecycle scripts that automate the dev environment:

- **`scripts.build`** — Runs `npm install` after each `git push` to install dependencies
- **`scripts.start`** — Runs `npx vite --host 0.0.0.0` on every agent boot to start the dev server
- **`routes`** — Exposes port 5173 at `/app` so you can preview the app from your agent's URL

## What This Template Includes

- **SOUL.md** — Frontend developer personality: writes clean React/TS, cares about UX and accessibility
- **AGENTS.md** — Workspace layout and workflow conventions
- **Starter project** — Minimal Vite + React + TypeScript scaffold ready to build on

## Usage

Import this repo when creating an agent on [Pinata Agents](https://agents.pinata.cloud).
