import React from 'react'
import { Button } from 'antd'
import {
  AppstoreOutlined,
  FormatPainterOutlined,
  ProjectOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons'
import {
  ABOUT_CONTACT_BUTTON_LABEL,
  ABOUT_SKILL_PRINT_FORMATS,
  ABOUT_SKILL_PRINT_MARKETING,
  ABOUT_SKILL_AB_TESTING,
  ABOUT_SKILL_CJM,
  ABOUT_SKILL_DESIGN_SYSTEMS,
  ABOUT_SKILL_PRINT_MARKETING_DESKTOP,
  ABOUT_SKILL_PROTOTYPING,
  ABOUT_SKILL_UI_KITS,
  ABOUT_SKILL_USABILITY,
  ABOUT_SKILL_USER_RESEARCH,
  ABOUT_SKILL_WIREFRAMING,
  ABOUT_UI_UX_FIGMA_SKILL_DETAIL,
  ABOUT_UI_UX_FIGMA_SKILL_TITLE,
} from './consts'
import heroImage from '../../assets/hero.png'
import VideoAvatar from '../VideoAvatar'
import styles from './styles.module.css'

export interface AboutProps {
  onOpenContact: () => void
}

interface ServiceCardData {
  icon: React.ReactNode
  title: string
  description: React.ReactNode
  skills: string[]
  skillHighlight?: { title: string; detail: string }
}

const SERVICE_CARDS: ServiceCardData[] = [
  {
    icon: <AppstoreOutlined />,
    title: 'UI/UX, Product & Web Design',
    description:
      'I transform complex ideas into intuitive, human-centered digital experiences that your customers will actually love using.',
    skills: [
      'UI/UX & Product Design',
      ABOUT_SKILL_CJM,
      'Responsive Design',
      'Atomic Design',
      'Web & Mobile App Design',
      ABOUT_SKILL_UI_KITS,
      ABOUT_SKILL_USER_RESEARCH,
      ABOUT_SKILL_WIREFRAMING,
      ABOUT_SKILL_AB_TESTING,
      'Information Architecture',
      ABOUT_SKILL_PROTOTYPING,
      ABOUT_SKILL_USABILITY,
      ABOUT_SKILL_DESIGN_SYSTEMS,
    ],
    skillHighlight: {
      title: ABOUT_UI_UX_FIGMA_SKILL_TITLE,
      detail: ABOUT_UI_UX_FIGMA_SKILL_DETAIL,
    },
  },
  {
    icon: <ThunderboltOutlined />,
    title: 'Design-to-Code Workflow, AI-Powered Implementation',
    description: (
      <>
        I bridge the gap between design and development, leveraging <strong>Cursor AI</strong> to
        transform high-fidelity prototypes into fully functional, production-ready websites.
      </>
    ),
    skills: [
      'Figma-to-Code Workflow (via Cursor)',
      'AI-Assisted Web Implementation',
      'AI-Powered Frontend Development',
    ],
  },
  {
    icon: <FormatPainterOutlined />,
    title: 'Graphic Design, Logo & Branding',
    description:
      'From memorable logos and premium packaging to impactful print materials, I craft cohesive visual identities that tell your story and build trust.',
    skills: [
      'Branding & Brand Identity',
      'Visual Identity',
      'Logo Design',
      'Label & Packaging Design',
      'Stationery',
      ABOUT_SKILL_PRINT_MARKETING_DESKTOP,
      'Infographics',
      'Social Media Imagery',
      'Banner Ad Design',
      'Advertisement Design',
      'Email Design',
    ],
  },
  {
    icon: <ProjectOutlined />,
    title: 'Pitch Decks & Presentations',
    description:
      'I turn boring, text-heavy slides into compelling visual stories that win investors and close deals.',
    skills: [
      'Investor Pitch Deck',
      'PPTX',
      'Fundraising Presentation',
      'GSLIDES',
      'Business Presentation',
      'Google Slides',
      'Microsoft PowerPoint',
    ],
  },
]

const About: React.FC<AboutProps> = ({ onOpenContact }) => {
  return (
    <div className={styles.aboutPage}>
      <section className={styles.heroSection}>
        <div className={styles.shell}>
          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <h1 className={styles.heroH1}>
                <span className={styles.heroH1Accent}>Full-Stack</span>
                <br />
                Visual Designer
              </h1>
              <div className={styles.heroParagraphs}>
                <p className={styles.heroParagraph}>
                  With my Full-Stack Visual Design expertise, you don't need to hire different
                  designers for your Branding, UI/UX, or Marketing Materials. I ensure consistent
                  visual communication across every touchpoint of your brand.
                </p>
                <p className={styles.heroParagraph}>
                  My journey into design isn't typical. Before becoming a Senior Designer with 5+
                  years of experience, I had a background in medicine (pediatrics) and finance
                  (audit). This unique mix is a huge advantage for you: I bring clinical-level
                  empathy to understand exactly what your users need, and audit-level precision to
                  ensure every pixel serves your business goals.
                </p>
              </div>
            </div>
            <div className={styles.heroVisualCol}>
              <div className={styles.avatarFrame}>
                <VideoAvatar />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <img
          className={styles.servicesBgImage}
          src={heroImage}
          alt=""
          aria-hidden="true"
          decoding="async"
        />
        <div className={styles.servicesBgOverlay} aria-hidden="true" />
        <div className={styles.shell}>
          <h2 className={styles.sectionTitle}>My Services</h2>
          <div className={styles.servicesGrid}>
            {SERVICE_CARDS.map((card) => (
              <article key={card.title} className={styles.serviceCard}>
                <div className={styles.serviceIconCircle}>{card.icon}</div>
                <h3 className={styles.serviceCardTitle}>{card.title}</h3>
                <p className={styles.serviceCardDesc}>{card.description}</p>
                <div className={styles.serviceCardFocus}>
                  <strong className={styles.serviceCardFocusLabel}>Core Skills:</strong>
                  <div className={styles.serviceCardSkills}>
                    {card.skills.map((skill) => {
                      if (skill === ABOUT_SKILL_PRINT_MARKETING_DESKTOP) {
                        return (
                          <React.Fragment key={skill}>
                            <span
                              className={`${styles.skillTag} ${styles.skillTagDesktopOnly}`}
                            >
                              {skill}
                            </span>
                            <span
                              className={`${styles.skillTag} ${styles.skillTagMobileOnly}`}
                            >
                              {ABOUT_SKILL_PRINT_MARKETING}
                            </span>
                            <span
                              className={`${styles.skillTag} ${styles.skillTagMobileOnly}`}
                            >
                              {ABOUT_SKILL_PRINT_FORMATS}
                            </span>
                          </React.Fragment>
                        )
                      }

                      return (
                        <span key={skill} className={styles.skillTag}>
                          {skill}
                        </span>
                      )
                    })}
                  </div>
                  {card.skillHighlight && (
                    <p className={styles.skillHighlight}>
                      <span className={styles.skillHighlightTitle}>
                        {card.skillHighlight.title}:
                      </span>{' '}
                      <span className={styles.skillHighlightDetail}>
                        {card.skillHighlight.detail}
                      </span>
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
          <div className={styles.servicesCta}>
            <Button
              type="default"
              size="large"
              className={styles.contactBtn}
              onClick={onOpenContact}
            >
              {ABOUT_CONTACT_BUTTON_LABEL}
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
