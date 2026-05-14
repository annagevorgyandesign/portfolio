import worksAdidasPoster from '../../assets/works-adidas-poster-preview.png'
import worksBlackstormCocktailPackaging from '../../assets/works-blackstorm-cocktail-packaging-preview.png'
import worksHeritageRealEstateLogo from '../../assets/works-heritage-real-estate-logo-preview.png'
import worksItalianPizzaPackaging from '../../assets/works-italian-pizza-packaging-preview.png'
import worksLifeInPlasticEditorial from '../../assets/works-life-in-plastic-editorial-preview.png'
import worksMedicinePackaging from '../../assets/works-medicine-packaging-preview.png'
import worksPlasticSurgeryBranding from '../../assets/works-plastic-surgery-branding-preview.png'
import worksPresentationFondationLv from '../../assets/works-presentation-fondation-lv-preview.png'
import worksSocialCampaignPoster from '../../assets/works-social-campaign-poster-preview.png'
import worksSunnyHospiceBranding from '../../assets/works-sunny-hospice-branding-preview.png'
import worksUiUxCaseStudy from '../../assets/works-ui-ux-case-study-preview.png'
import worksWildTribesAfricaSlides from '../../assets/works-wild-tribes-africa-slides-preview.png'

export const BEHANCE_PROFILE_URL = 'https://www.behance.net/annagevorgyan2' as const

export const LINKEDIN_PROFILE_URL = 'https://www.linkedin.com/in/annagevorgyan-design' as const

export type WorkProject = {
  readonly title: string
  readonly tags: readonly string[]
  /** Behance project (gallery) URL for this piece. */
  readonly behanceUrl: string
  /** Local or bundled image URL; when omitted, `imageSeed` is used with picsum.photos. */
  readonly coverSrc?: string
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
    behanceUrl:
      'https://www.behance.net/gallery/181911813/Google-Slides-PowerPoint-Presentation-Design',
    coverSrc: worksPresentationFondationLv,
    imageSeed: 'works-slides-1',
  },
  {
    title: 'UI/UX & Product Design Case Study',
    tags: ['UI/UX', 'Product', 'Case Study'],
    behanceUrl: 'https://www.behance.net/gallery/234495377/UIUX-Product-Design-Case-Study',
    coverSrc: worksUiUxCaseStudy,
    imageSeed: 'works-ui-case',
  },
  {
    title: 'Italian Pizza Packaging Design',
    tags: ['Packaging', 'Print', 'Food'],
    behanceUrl: 'https://www.behance.net/gallery/150623399/Italian-Pizza-Packaging-Design',
    coverSrc: worksItalianPizzaPackaging,
    imageSeed: 'works-pizza',
  },
  {
    title: 'Plastic Surgery Logo Design and Branding',
    tags: ['Logo', 'Branding', 'Healthcare'],
    behanceUrl:
      'https://www.behance.net/gallery/171525177/Plastic-Surgery-Logo-Design-and-Branding',
    coverSrc: worksPlasticSurgeryBranding,
    imageSeed: 'works-plastic-logo',
  },
  {
    title: 'BlackStorm Alcoholic Cocktail Packaging Design',
    tags: ['Packaging', 'Beverage', 'Brand'],
    behanceUrl:
      'https://www.behance.net/gallery/149140659/BlackStorm-Alcoholic-Cocktail-Packaging-Design',
    coverSrc: worksBlackstormCocktailPackaging,
    imageSeed: 'works-blackstorm',
  },
  {
    title: 'Graphic Design | Adidas Poster Design',
    tags: ['Poster', 'Campaign', 'Sports'],
    behanceUrl: 'https://www.behance.net/gallery/147525871/Graphic-Design-Adidas-Poster-Design',
    coverSrc: worksAdidasPoster,
    imageSeed: 'works-adidas',
  },
  {
    title: 'Logo Design, Branding',
    tags: ['Logo', 'Identity'],
    behanceUrl: 'https://www.behance.net/gallery/180656537/Logo-Design-Branding',
    coverSrc: worksSunnyHospiceBranding,
    imageSeed: 'works-logo-brand',
  },
  {
    title: 'Medicine Packaging and Logo Design',
    tags: ['Packaging', 'Pharma', 'Logo'],
    behanceUrl: 'https://www.behance.net/gallery/153187589/Medicine-Packaging-and-Logo-Design',
    coverSrc: worksMedicinePackaging,
    imageSeed: 'works-medicine',
  },
  {
    title: 'Heritage Real Estate — Logo Design',
    tags: ['Logo', 'Real Estate'],
    behanceUrl: 'https://www.behance.net/gallery/154643705/Heritage-Real-Estate-Logo-Design',
    coverSrc: worksHeritageRealEstateLogo,
    imageSeed: 'works-heritage',
  },
  {
    title: 'Google Slides / PowerPoint Presentation Design',
    tags: ['Deck', 'Storytelling', 'Layout'],
    behanceUrl:
      'https://www.behance.net/gallery/190484751/Google-Slides-PowerPoint-Presentation-Design',
    coverSrc: worksSocialCampaignPoster,
    imageSeed: 'works-social-poster',
  },
  {
    title: 'Google Slides / PowerPoint Presentation Design',
    tags: ['Slides', 'Corporate', 'Visual System'],
    behanceUrl:
      'https://www.behance.net/gallery/194118127/Google-Slides-PowerPoint-Presentation-Design',
    coverSrc: worksWildTribesAfricaSlides,
    imageSeed: 'works-slides-2',
  },
  {
    title: 'Graphic Design | Social Campaign Poster Design',
    tags: ['Social', 'Campaign', 'Poster'],
    behanceUrl:
      'https://www.behance.net/gallery/147462579/Graphic-Design-Social-Campaign-Poster-Design',
    coverSrc: worksLifeInPlasticEditorial,
    imageSeed: 'works-slides-3',
  },
]
