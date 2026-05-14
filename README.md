# Anna Gevorgyan — Portfolio

A modern personal portfolio site for **UI/UX, product, and graphic design**. It combines a marketing-style landing page with in-app tools: a **Gemini AI** prompt experience, a printable-style **CV** view, and two **D-ID avatar video generators**.

## What is included

- **Home** — Hero, services, work preview, "why work with me" highlights, client testimonial, and a contact call-to-action.
- **Works** — Showcase of design and development projects.
- **Gemini** — Send prompts to **Gemini 2.5 Flash** and read the response in the app (including copy to clipboard).
- **CV Writer** — A structured résumé page aligned with your portfolio story.
- **D-ID** — AI avatar video generator using **Microsoft Azure neural voices** (two-column layout with live image preview).
- **D-ID 2** — AI avatar video generator using **ElevenLabs voices**, styled in the site's dark theme with a vertical form and separate result card.
- **Contact** — Contact form to get in touch.

## Tech stack

- React 19 and TypeScript
- Vite 8
- Ant Design (Antd) 6 with the dark theme algorithm and `antd/dist/reset.css`
- Axios
- pnpm
- ESLint 9

## Run locally

```bash
pnpm install
pnpm dev
```

## Lint

```bash
pnpm lint
```

## Build and preview

```bash
pnpm build
pnpm preview
```

## Optional: API keys

For the **Gemini** page to work, add a `.env` file in the project root:

```bash
VITE_GEMINI_API_KEY=your_key_here
```

Create a key in [Google AI Studio](https://aistudio.google.com/apikey).

For the **D-ID** and **D-ID 2** pages to work, add your D-ID API key:

```bash
VITE_DID_API_KEY=your_email:your_api_key_here
```

Get your key at [D-ID Studio](https://studio.d-id.com).

## Project structure

- `src/main.tsx` — Application entry, Ant Design dark `ConfigProvider`, and global theme tokens (primary color, typography).
- `src/components/App/` — App shell: header, navigation between views, footer.
- `src/pages/Portfolio/` — Wraps the portfolio landing.
- `src/components/Home/` — Landing sections and copy (`consts.ts` for text).
- `src/pages/Works/` — Project showcase page.
- `src/pages/Gemini/` — Gemini chat UI.
- `src/pages/WriteMyCV/` — CV layout and content.
- `src/pages/DID/` — D-ID avatar generator with Azure neural TTS voices.
- `src/pages/DID2/` — D-ID avatar generator with ElevenLabs voices, dark-themed.
- `src/pages/Contact/` — Contact page.
- `src/api/gemini.ts` — Calls the Gemini REST API.

## Customize

- **Headlines and section copy** — Edit `src/components/Home/consts.ts`.
- **Contact and footer** — Update `src/components/App/index.tsx` and the CV page in `src/pages/WriteMyCV/index.tsx`.
- **Theme** — Adjust colors and tokens in `src/main.tsx` under `ConfigProvider`.

---

Built with Ant Design and responsive layouts.
