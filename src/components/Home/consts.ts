import { BEHANCE_PROFILE_URL, LINKEDIN_PROFILE_URL } from '../../pages/Works/consts'

export interface ServiceItem {
  title: string
  description: string
}

export interface WorkItem {
  title: string
}

export interface StatItem {
  value: string
  label: string
}

const HERO_HEADLINE_LEAD = 'I Design.' as const
const HERO_HEADLINE_ACCENT = 'You Grow.' as const

export const HERO_HEADLINE = {
  lead: HERO_HEADLINE_LEAD,
  accent: HERO_HEADLINE_ACCENT,
} as const

export const HOME_COPY = {
  heroTitle: `${HERO_HEADLINE_LEAD} ${HERO_HEADLINE_ACCENT}`,
  heroSubtitle:
    'UI/UX, Product, Web Design, Graphic Design & Branding Solutions for Startups and Brands',
  primaryAction: 'View Portfolio',
  secondaryAction: 'Download CV',
  servicesAction: 'All Services',
  worksAction: 'See More',
  testimonialTitle: 'Client Testimonial',
  testimonialQuote:
    'Anna played a key role in preparing and launching our new office in Florida. We collaborated closely for several months on our visual identity, and she brought it to life - from business cards and brochures to social media profiles and internal document templates.\n\nShe was always available, adjusting to the time difference, and consistently delivered clean, thoughtful design options. Her attention to detail is remarkable - from photos and avatars to icons and typography. We even explored motion design for social media intros, and the results exceeded expectations.\n\nIf you get the chance to work with her, you will be in good hands. She is not just a freelancer - she is a true design partner in your team.',
  testimonialAuthor: 'Evgeny',
  testimonialAuthorRole: 'Little Movers Marketing Director',
  ctaTitle: 'Want To Launch Your Brand Into The Future?',
  ctaAction: 'Contact Now',
  whyDescription:
    'I specialize in creating exceptional designs where Functionality meets Creativity, transforming businesses into outstanding Brands that engage audiences.',
} as const

export const SERVICE_ITEMS: ServiceItem[] = [
  {
    title: 'UI/UX Design',
    description: 'Creating intuitive and engaging user experiences',
  },
  {
    title: 'Graphic Design',
    description: 'Creating functional and creative designs',
  },
  {
    title: 'Brand Identity',
    description: 'Inspiring identity for your business',
  },
]

export const WORK_ITEMS: WorkItem[] = [
  { title: 'Adidas Visual Set' },
  { title: 'Product Landing' },
  { title: 'Stationery Mockups' },
  { title: 'Branding Kit' },
  { title: 'Catalog Design' },
  { title: 'Packaging Concept' },
]

export const STAT_ITEMS: StatItem[] = [
  { value: '3 +', label: 'Years of Experience' },
  { value: '100%', label: 'Job Success' },
  { value: '50 +', label: 'Clients on Upwork' },
  { value: '100 +', label: 'Total Jobs on Upwork' },
  { value: '110 +', label: 'Total Hours on Upwork' },
]

export const FOOTER_LINKS = [
  { label: 'Bē', href: BEHANCE_PROFILE_URL },
  { label: 'in', href: LINKEDIN_PROFILE_URL },
] as const
