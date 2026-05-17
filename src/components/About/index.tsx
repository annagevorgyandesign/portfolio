import React from 'react'
import { AppstoreOutlined, FormatPainterOutlined, ProjectOutlined } from '@ant-design/icons'
import styles from './styles.module.css'

interface ServiceCardData {
  icon: React.ReactNode
  title: string
  description: string
  focus: string
}

const SERVICE_CARDS: ServiceCardData[] = [
  {
    icon: <AppstoreOutlined />,
    title: 'UI/UX, Product & Web Design',
    description:
      'I transform complex ideas into intuitive, human-centered digital experiences that your customers will actually love using.',
    focus: 'Web & Mobile App Design, User Research, Design Systems, Auto Layout.',
  },
  {
    icon: <FormatPainterOutlined />,
    title: 'Logo, Branding & Graphic Design',
    description:
      'From memorable logos and premium packaging to impactful print materials, I craft cohesive visual identities that tell your story and build trust.',
    focus: 'Brand Identity, Label & Packaging, Print Materials.',
  },
  {
    icon: <ProjectOutlined />,
    title: 'Pitch Decks & Presentations',
    description:
      'I turn boring, text-heavy slides into compelling visual stories that win investors and close deals.',
    focus: 'Investor Pitch Decks, Business Presentations.',
  },
]

const WHY_POINTS: string[] = [
  'One Designer, Infinite Solutions',
  'Proven Impact: 50+ successful projects',
  'Reliability',
]

const TOOLS: string[] = ['Figma', 'Adobe CS', 'PowerPoint', 'Google Slides', 'AI Tools']

const About: React.FC = () => {
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
              <div className={styles.avatarPlaceholder} />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className={styles.shell}>
          <h2 className={styles.sectionTitle}>My Services</h2>
          <div className={styles.servicesGrid}>
            {SERVICE_CARDS.map((card) => (
              <article key={card.title} className={styles.serviceCard}>
                <div className={styles.serviceIconCircle}>{card.icon}</div>
                <h3 className={styles.serviceCardTitle}>{card.title}</h3>
                <p className={styles.serviceCardDesc}>{card.description}</p>
                <p className={styles.serviceCardFocus}>
                  <strong>Focus:</strong> {card.focus}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.whySection}>
        <div className={styles.shell}>
          <div className={styles.whyGrid}>
            <div className={styles.whyCol}>
              <h2 className={styles.whyTitle}>Why Work With Me?</h2>
              <ul className={styles.whyList}>
                {WHY_POINTS.map((point) => (
                  <li key={point} className={styles.whyItem}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.toolsCol}>
              <h2 className={styles.whyTitle}>Tools</h2>
              <div className={styles.toolsWrap}>
                {TOOLS.map((tool) => (
                  <span key={tool} className={styles.toolChip}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
