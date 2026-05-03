# Anna Gevorgyan — Portfolio

A modern personal portfolio site for **UI/UX, product, and graphic design**. It combines a marketing-style landing page with in-app tools: a **Gemini AI** prompt experience and a printable-style **CV** view.

## What is included

- **Home** — Hero, services, work preview, “why work with me” highlights, client testimonial, and a contact call-to-action.
- **Gemini** — Send prompts to **Gemini 2.5 Flash** and read the response in the app (including copy to clipboard).
- **CV Writer** — A structured résumé page aligned with your portfolio story.

## Tech stack

- React 19 and TypeScript
- Vite
- Ant Design (Antd) 6 and CSS Modules
- Axios
- pnpm

## Run locally

```bash
pnpm install
pnpm dev
```

## Build and preview

```bash
pnpm build
pnpm preview
```

## Optional: Gemini API

For the **Gemini** page to work, add a `.env` file in the project root:

```bash
VITE_GEMINI_API_KEY=your_key_here
```

Create a key in [Google AI Studio](https://aistudio.google.com/apikey).

## Project structure

- `src/main.tsx` — Application entry and global setup.
- `src/components/App/` — App shell: header, navigation between views, footer.
- `src/pages/Portfolio/` — Wraps the portfolio landing.
- `src/components/Home/` — Landing sections and copy (`consts.ts` for text).
- `src/pages/Gemini/` — Gemini chat UI.
- `src/pages/WriteMyCV/` — CV layout and content.
- `src/api/gemini.ts` — Calls the Gemini REST API.

## Customize

- **Headlines and section copy** — Edit `src/components/Home/consts.ts`.
- **Contact and footer** — Update `src/components/App/index.tsx` and the CV page in `src/pages/WriteMyCV/index.tsx`.

---

Built with Ant Design and responsive layouts.
