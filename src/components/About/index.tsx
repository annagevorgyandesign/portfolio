import React, { useState } from 'react'
import { AppstoreOutlined, FormatPainterOutlined, ProjectOutlined } from '@ant-design/icons'
import { ABOUT_AVATAR_ALT, ABOUT_AVATAR_VIDEO_SRC } from './consts'
import styles from './styles.module.css'

interface ServiceCardData {
  icon: React.ReactNode
  title: string
  description: React.ReactNode
  skills: string[]
}

const SERVICE_CARDS: ServiceCardData[] = [
  {
    icon: <AppstoreOutlined />,
    title: 'UI/UX, Product & Web Design',
    description: (
      <>
        I transform complex ideas into intuitive, human-centered digital experiences that your
        customers will actually love using. I also bridge the gap between design and development,
        leveraging <strong>Cursor AI</strong> to transform high-fidelity prototypes into fully
        functional, production-ready websites.
      </>
    ),
    skills: [
      'UI/UX & Product Design',
      'Web & Mobile App Design',
      'User Research & CJM',
      'Information Architecture',
      'Wireframing & Prototyping',
      'Design Systems & UI Kits',
      'Atomic Design',
      'Responsive Design',
      'Usability & A/B Testing',
      'AI-Assisted Web Implementation',
      'Figma-to-Code Workflow (via Cursor)',
      'AI-Powered Frontend Development',
    ],
  },
  {
    icon: <FormatPainterOutlined />,
    title: 'Logo, Branding & Graphic Design',
    description:
      'From memorable logos and premium packaging to impactful print materials, I craft cohesive visual identities that tell your story and build trust.',
    skills: ['Brand Identity', 'Label & Packaging', 'Print Materials'],
  },
  {
    icon: <ProjectOutlined />,
    title: 'Pitch Decks & Presentations',
    description:
      'I turn boring, text-heavy slides into compelling visual stories that win investors and close deals.',
    skills: ['Investor Pitch Decks', 'Business Presentations'],
  },
]

const About: React.FC = () => {
  const [hasVideo, setHasVideo] = useState(false)

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
                <div className={styles.avatarMedia} aria-label={ABOUT_AVATAR_ALT}>
                  <video
                    className={`${styles.avatarVideo} ${hasVideo ? '' : styles.avatarVideoHidden}`}
                    src={ABOUT_AVATAR_VIDEO_SRC}
                    autoPlay
                    loop
                    muted
                    playsInline
                    aria-hidden={!hasVideo}
                    onLoadedData={() => setHasVideo(true)}
                    onError={() => setHasVideo(false)}
                  />
                  {!hasVideo && <span className={styles.avatarTag}>Video Avatar</span>}
                </div>
              </div>
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
                <div className={styles.serviceCardFocus}>
                  <strong className={styles.serviceCardFocusLabel}>Core Skills:</strong>
                  <ul className={styles.serviceCardSkills}>
                    {card.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
