export const BEHANCE_PROFILE_URL = 'https://www.behance.net/annagevorgyan2' as const

export const LINKEDIN_PROFILE_URL = 'https://www.linkedin.com/in/annagevorgyan-design' as const

export type WorkProject = {
  readonly title: string
  readonly tags: readonly string[]
  /** Stable seed for placeholder cover images (picsum.photos). */
  readonly imageSeed: string
}

export const WORKS_INTRO =
  'UI/UX, product and web design, graphic design, logo and branding, packaging, and presentation design — selected work on Behance.'

export const WORKS_CTA = {
  headingLine1: 'Have a project in mind?',
  headingLine2: "Let's talk.",
  buttonLabel: 'Contact Now',
} as const

export const WORKS_PROJECTS: readonly WorkProject[] = [
  {
    title: 'Google Slides / PowerPoint Presentation Design',
    tags: ['Presentation', 'Pitch Deck', 'Brand'],
    imageSeed: 'works-slides-1',
  },
  {
    title: 'UI/UX & Product Design Case Study',
    tags: ['UI/UX', 'Product', 'Case Study'],
    imageSeed: 'works-ui-case',
  },
  {
    title: 'Italian Pizza Packaging Design',
    tags: ['Packaging', 'Print', 'Food'],
    imageSeed: 'works-pizza',
  },
  {
    title: 'Plastic Surgery Logo Design and Branding',
    tags: ['Logo', 'Branding', 'Healthcare'],
    imageSeed: 'works-plastic-logo',
  },
  {
    title: 'BlackStorm Alcoholic Cocktail Packaging Design',
    tags: ['Packaging', 'Beverage', 'Brand'],
    imageSeed: 'works-blackstorm',
  },
  {
    title: 'Graphic Design | Adidas Poster Design',
    tags: ['Poster', 'Campaign', 'Sports'],
    imageSeed: 'works-adidas',
  },
  {
    title: 'Logo Design, Branding',
    tags: ['Logo', 'Identity'],
    imageSeed: 'works-logo-brand',
  },
  {
    title: 'Medicine Packaging and Logo Design',
    tags: ['Packaging', 'Pharma', 'Logo'],
    imageSeed: 'works-medicine',
  },
  {
    title: 'Heritage Real Estate — Logo Design',
    tags: ['Logo', 'Real Estate'],
    imageSeed: 'works-heritage',
  },
  {
    title: 'Graphic Design | Social Campaign Poster Design',
    tags: ['Social', 'Campaign', 'Poster'],
    imageSeed: 'works-social-poster',
  },
  {
    title: 'Google Slides / PowerPoint Presentation Design',
    tags: ['Slides', 'Corporate', 'Visual System'],
    imageSeed: 'works-slides-2',
  },
  {
    title: 'Google Slides / PowerPoint Presentation Design',
    tags: ['Deck', 'Storytelling', 'Layout'],
    imageSeed: 'works-slides-3',
  },
]
