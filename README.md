# Portfolio Starter (React + Ant Design + TypeScript)

Starter codebase for a frontend portfolio project using:

- React
- TypeScript
- Vite
- Ant Design
- pnpm

## Run locally

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
pnpm preview
```

## Project structure

- `src/main.tsx` - app entry with Ant Design global theme config
- `src/App.tsx` - one-page portfolio layout and sections
- `src/data/portfolio.tsx` - portfolio content (projects, skills, socials, etc.)
- `src/types/portfolio.ts` - shared TypeScript types
- `src/index.css` - global styles

## Customize your portfolio

1. Edit your personal info in `src/data/portfolio.tsx`
2. Add real projects and links in the `projects` array
3. Update experience and skills sections
4. Replace `resumeUrl` and contact email

## Notes

- The starter uses a dark theme by default.
- Ant Design styles are loaded from `antd/dist/reset.css`.
