import { HOME_COPY, SERVICE_ITEMS, STAT_ITEMS, WORK_ITEMS } from '../../components/Home/consts'

export const OWNER_FIRST_NAME = 'Anna'

export const GEMINI_PAGE_TITLE = 'Gemini Chat'

export const GEMINI_HEADING = 'Ask AI Assistant About the Portfolio'

export const GEMINI_SUBTITLE =
  'Curious about my portfolio, experience, or skills? My digital twin is here to answer your questions in real-time.'

export const GEMINI_CONVERSATION_LABEL = 'Gemini AI Chat'

export const GEMINI_HINT_TEXT =
  'Try prompts like "show resume", "summarize experience", or "write a short recruiter intro".'

export const GEMINI_RESUME_PAGE_NOTE_PARTS = {
  before: 'The full resume is on the ',
  highlight: 'CV Writer',
  after: ' page.',
} as const

export const GEMINI_RESUME_PAGE_NOTE = `${GEMINI_RESUME_PAGE_NOTE_PARTS.before}${GEMINI_RESUME_PAGE_NOTE_PARTS.highlight}${GEMINI_RESUME_PAGE_NOTE_PARTS.after}`

export const GEMINI_SHOW_RESUME_LABEL = 'Show Saved Resume'

export const GEMINI_WELCOME_MESSAGE = `Hi! I am ${OWNER_FIRST_NAME}'s portfolio assistant. Ask me about projects, experience, or skills.`

export const SHOW_RESUME_USER_PROMPT =
  'Please bring my full saved resume from this portfolio into your reply, formatted clearly for the reader.'

export const SUGGESTED_PROMPTS = [
  'Summarize my experience for a recruiter.',
  'What services do I offer on this portfolio?',
  'List my strongest technical skills.',
] as const

/** Plain-text mirror of the CV Writer page for the assistant context only. */
export const RESUME_PLAIN_TEXT = `
Name: Anna Gevorgyan
Title: UI/UX & Product Designer, Graphic Designer
Location: Yerevan, Armenia

Contact:
- WhatsApp, Viber: +374 55 40 88 20
- Email: anna.gevorgyan.design@gmail.com
- Portfolio: behance.net/annagevorgyan2
- LinkedIn: linkedin.com/in/annagevorgyan-design

SUMMARY:
Results-driven and analytical UI/UX, Product, and Graphic Designer with a human-centered approach to creating intuitive and user-friendly experiences across both digital and print media.
Drawing on a unique background in medicine (pediatrics) and finance (audit), I combine deep, clinical-level empathy with analytical precision to solve complex problems.

WORK EXPERIENCE:

Upwork — UI/UX & Product Designer, Graphic Designer | June 2023 - Present
- Led a complete redesign of a client's website, focusing on improving UX and conversion rates
- Design projects from concept to execution
- Banners for digital ads, Brochures / Flyers, Social Media Banners, Emails
- Presentations and Pitch Decks
- Logos, Brand Books
- Printing materials
- Creative solutions for business problems
- Amend designs after feedback
- Ensure final graphics and layouts are visually appealing and on-brand

Professionals LLC — Graphic Designer | March 2022 - May 2024
- Logos, Banners, Brochures, Flyers, Emails, Business Cards, Social Media Post designs, Presentations

ACHIEVEMENTS (Upwork):
- Top Rated (top 3%) on Upwork with 100% Job Success Score
- 50+ design projects with high client satisfaction
- Branding for 10+ clients; one project helped increase client sales by 20%

EDUCATION:
- ARDY Academy | UI/UX and Product Design | Feb 2025 - Sep 2025 | Yerevan (156 hours, Distinction, AGBU Women Coders)
- ARDY Academy | AI for Everyone | Aug 2025 - Sep 2025 | Yerevan (AGBU Women Coders)
- Pixel IT School | Graphic Design | Feb 2022 - Jun 2022 | Yerevan (96 hours)
- IATC | Master's, Accountancy and Audit | 2005 - 2007 | Yerevan
- Yerevan State Medical University | MD, Pediatrics | 1992 - 1999 | Yerevan

TECHNICAL SKILLS:
UI/UX & Product: UI/UX, Product & Web Design, App & Landing Page Design, User Research, Competitor Analysis, Personas, CJM, IA, User Flows, Wireframing, Prototyping, Design Systems, Usability & A/B Testing, etc.
Graphic & Branding: Brand Identity, Logo, Packaging, Print & Marketing, Banners, Layout, Social & Infographics, Typography, Color Theory
Tools: Figma, Adobe CC (Illustrator, Photoshop, Acrobat), Microsoft Office, Google Suite, Jira, Trello, Asana, AI Tools

SOFT SKILLS:
Empathy & user-centricity; design thinking; communication & collaboration; adaptability; time management; attention to detail

LANGUAGES:
Armenian (Native), English (Conversational), Russian (Conversational)
`.trim()

function formatHomeHighlights(): string {
  const services = SERVICE_ITEMS.map((s) => `- ${s.title}: ${s.description}`).join('\n')
  const works = WORK_ITEMS.map((w) => `- ${w.title}`).join('\n')
  const stats = STAT_ITEMS.map((s) => `- ${s.label}: ${s.value}`).join('\n')
  return `
Landing page tagline: ${HOME_COPY.heroTitle}
Subtitle: ${HOME_COPY.heroSubtitle}
Why section: ${HOME_COPY.whyDescription}

Services:
${services}

Featured work titles:
${works}

Stats:
${stats}

Testimonial (Evgeny, Little Movers Marketing Director): ${HOME_COPY.testimonialQuote.replace(/\n+/g, ' ')}
`.trim()
}

export const PORTFOLIO_SCOPE_RULES = `
You are ${OWNER_FIRST_NAME}'s portfolio assistant on her personal portfolio website.
You MUST only discuss topics that relate to ${OWNER_FIRST_NAME}'s professional activity as presented in the knowledge base: her resume/CV, services, featured work, stats, testimonials, skills, experience, education, and how to contact or hire her.
If the user asks about general knowledge, other people, politics, unrelated tech trivia, homework, or anything not tied to ${OWNER_FIRST_NAME}'s portfolio content, politely refuse and redirect them to ask about her work, background, or offerings.
Do not pretend to have private or real-time information beyond the knowledge base. Keep answers concise unless the user asks for detail.
`.trim()

export function buildSystemInstruction(): string {
  return `${PORTFOLIO_SCOPE_RULES}

--- Portfolio knowledge base (source of truth) ---

${formatHomeHighlights()}

--- Saved resume (CV Writer page) ---

${RESUME_PLAIN_TEXT}`
}
