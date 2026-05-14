import React from 'react'
import { Button } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import atomImage from '../../assets/atom.jpg'
import heroImage from '../../assets/hero.png'
import portfolioSetImage from '../../assets/portfolio-set.png'
import quoteMarkImage from '../../assets/quote-mark.png'
import {
  HERO_HEADLINE,
  HOME_COPY,
  SERVICE_ITEMS,
  STAT_ITEMS,
} from './consts'
import styles from './styles.module.css'

export interface HomeProps {
  onOpenContact: () => void
  onOpenWorks: () => void
}

const Home: React.FC<HomeProps> = ({ onOpenContact, onOpenWorks }) => {
  const [firstStat, ...remainingStats] = STAT_ITEMS

  return (
    <div className={styles.homePage}>
      <section id="home" className={styles.homeHero}>
        <div className={styles.heroCopyWrapper}>
          <div className={styles.heroCopy}>
            <h1>
              {HERO_HEADLINE.lead}
              <br />
              <span className={styles.heroTitleAccent}>{HERO_HEADLINE.accent}</span>
            </h1>
            <p>{HOME_COPY.heroSubtitle}</p>
            <div className={styles.heroActions}>
              <Button
                type="primary"
                className={`${styles.heroBtn} ${styles.heroBtnBlack}`}
                onClick={onOpenWorks}
              >
                {HOME_COPY.primaryAction}
              </Button>
              <a href="/cv.pdf" download="Anna_Gevorgyan_CV.pdf">
                <Button
                  className={`${styles.heroBtn} ${styles.heroBtnOutline}`}
                  icon={<DownloadOutlined />}
                >
                  {HOME_COPY.secondaryAction}
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <img src={heroImage} alt="Design and growth hero screenshot" />
        </div>
      </section>

      <div className={styles.homeShell}>
        <section id="services" className={styles.servicesSection}>
          <h2>My Services</h2>
          <div className={styles.servicesGrid}>
            {SERVICE_ITEMS.map((item) => (
              <article key={item.title} className={styles.serviceItem}>
                <div className={styles.serviceCircle}>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
          <Button className={styles.brandBtn} onClick={onOpenWorks}>
            {HOME_COPY.servicesAction}
          </Button>
        </section>

        <section id="home-works" className={styles.worksSection}>
          <h2>My Works</h2>
          <div className={styles.worksPreview}>
            <img src={portfolioSetImage} alt="Portfolio works preview collage" />
          </div>
          <Button className={styles.brandBtn} onClick={onOpenWorks}>
            {HOME_COPY.worksAction}
          </Button>
        </section>

        <section id="why" className={styles.whySection}>
          <h2>Why Work With Me?</h2>
          <div className={styles.whyGrid}>
            <div className={`${styles.whyCard} ${styles.whyAtomCard}`}>
              <img src={atomImage} alt="Atom icon" />
            </div>
            <div className={styles.whyCard}>
              <p className={styles.topRatedTitle}>Top Rated</p>
              <p className={styles.topRatedSubtitle}>10% <span>on Upwork</span></p>
            </div>

            {firstStat && (
              <div key={firstStat.label} className={styles.whyCard}>
                <p className={styles.statValue}>{firstStat.value}</p>
                <p className={styles.statLabel}>{firstStat.label}</p>
              </div>
            )}

            <div className={styles.whyTextCard}>
              <p>{HOME_COPY.whyDescription}</p>
            </div>

            {remainingStats.map((stat) => (
              <div key={stat.label} className={styles.whyCard}>
                <p className={styles.statValue}>{stat.value}</p>
                <p className={styles.statLabel}>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section id="testimonial" className={styles.testimonialSection}>
        <div className={`${styles.homeShell} ${styles.testimonialShell}`}>
          <div className={styles.testimonialLeft}>
            <h2>{HOME_COPY.testimonialTitle}</h2>
            <div className={styles.quoteMark}>
              <img src={quoteMarkImage} alt="Quote mark" />
            </div>
          </div>
          <p className={styles.testimonialStars}>★★★★★</p>
          <div className={styles.testimonialCopy}>
            {HOME_COPY.testimonialQuote
              .split('\n\n')
              .filter((paragraph) => paragraph.length > 0)
              .map((paragraph, index) => (
                <p key={index} className={styles.testimonialParagraph}>
                  {paragraph}
                </p>
              ))}
          </div>
          <div className={styles.testimonialAttribution}>
            <p className={styles.testimonialAuthor}>- {HOME_COPY.testimonialAuthor},</p>
            <p className={styles.testimonialAuthorRole}>{HOME_COPY.testimonialAuthorRole}</p>
          </div>
        </div>
      </section>

      <section id="contact-cta" className={styles.contactCta}>
        <div className={`${styles.homeShell} ${styles.ctaShell}`}>
          <h2>
            <span>Want To Launch Your Brand</span>
            <span>Into The Future?</span>
          </h2>
          <Button className={styles.brandBtn} onClick={onOpenContact}>
            {HOME_COPY.ctaAction}
          </Button>
        </div>
      </section>

    </div>
  )
}

export default Home
