export const BEHANCE_PROFILE_URL = 'https://www.behance.net/annagevorgyan2'

export interface PortfolioMockProject {
  id: string
  title: string
  tags: string[]
  imageSrc: string
  imageAlt: string
}

export const PORTFOLIO_MOCK_PROJECTS: readonly PortfolioMockProject[] = [
  {
    id: '1',
    title: 'UI/UX & Product Design Case Study',
    tags: ['UI/UX', 'Product'],
    imageSrc: 'https://picsum.photos/seed/behance-ui/800/600',
    imageAlt: 'UI and product design project preview',
  },
  {
    id: '2',
    title: 'Google Slides / PowerPoint Presentation Design',
    tags: ['Presentation', 'Branding'],
    imageSrc: 'https://picsum.photos/seed/behance-deck/800/600',
    imageAlt: 'Presentation design project preview',
  },
  {
    id: '3',
    title: 'Italian Pizza Packaging Design',
    tags: ['Packaging', 'Print'],
    imageSrc: 'https://picsum.photos/seed/behance-pizza/800/600',
    imageAlt: 'Packaging design project preview',
  },
  {
    id: '4',
    title: 'Plastic Surgery Logo Design and Branding',
    tags: ['Logo', 'Branding'],
    imageSrc: 'https://picsum.photos/seed/behance-logo/800/600',
    imageAlt: 'Logo and branding project preview',
  },
  {
    id: '5',
    title: 'BlackStorm Alcoholic Cocktail Packaging',
    tags: ['Packaging', 'Illustration'],
    imageSrc: 'https://picsum.photos/seed/behance-storm/800/600',
    imageAlt: 'Beverage packaging project preview',
  },
  {
    id: '6',
    title: 'Heritage Real Estate — Logo Design',
    tags: ['Logo', 'Real Estate'],
    imageSrc: 'https://picsum.photos/seed/behance-estate/800/600',
    imageAlt: 'Real estate branding project preview',
  },
]
