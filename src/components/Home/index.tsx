import React from 'react'
import atomImage from '../../assets/atom.jpg'
import heroImage from '../../assets/hero.png'
import portfolioSetImage from '../../assets/portfolio-set.png'
import quoteMarkImage from '../../assets/quote-mark.png'
import {
  HOME_COPY,
  SERVICE_ITEMS,
  STAT_ITEMS,
} from './consts'
import './styles.css'

const Home: React.FC = () => {
  const [firstStat, ...remainingStats] = STAT_ITEMS

  return (
    <div className="home-page">
      <div className="home-shell">
        <section id="home" className="home-hero">
          <div className="hero-copy">
            <h1>
              I Design.
              <br />
              You Grow.
            </h1>
            <p>{HOME_COPY.heroSubtitle}</p>
            <div className="hero-actions">
              <button type="button" className="hero-btn hero-btn-black">
                {HOME_COPY.primaryAction}
              </button>
              <button type="button" className="hero-btn hero-btn-outline">
                {HOME_COPY.secondaryAction}
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <img src={heroImage} alt="Design and growth hero screenshot" />
          </div>
        </section>

        <section className="services-section">
          <h2>My Services</h2>
          <div className="services-grid">
            {SERVICE_ITEMS.map((item) => (
              <article key={item.title} className="service-item">
                <div className="service-circle">
                  <h3>{item.title}</h3>
                </div>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
          <button type="button" className="brand-btn">
            {HOME_COPY.servicesAction}
          </button>
        </section>

        <section className="works-section">
          <h2>My Works</h2>
          <div className="works-preview">
            <img src={portfolioSetImage} alt="Portfolio works preview collage" />
          </div>
          <button type="button" className="brand-btn">
            {HOME_COPY.worksAction}
          </button>
        </section>

        <section className="why-section">
          <h2>Why Work With Me?</h2>
          <div className="why-grid">
            <div className="why-card why-atom-card">
              <img src={atomImage} alt="Atom icon" />
            </div>
            <div className="why-card top-rated-card">
              <p className="top-rated-title">Top Rated</p>
              <p className="top-rated-subtitle">3% <span>on Upwork</span></p>
            </div>

            {firstStat && (
              <div key={firstStat.label} className="why-card stat-card">
                <p className="stat-value">{firstStat.value}</p>
                <p className="stat-label">{firstStat.label}</p>
              </div>
            )}

            <div className="why-text-card">
              <p>{HOME_COPY.whyDescription}</p>
            </div>

            {remainingStats.map((stat) => (
              <div key={stat.label} className="why-card stat-card">
                <p className="stat-value">{stat.value}</p>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="testimonial-section">
        <div className="home-shell testimonial-shell">
          <div className="testimonial-left">
            <h2>{HOME_COPY.testimonialTitle}</h2>
            <div className="quote-mark">
              <img src={quoteMarkImage} alt="Quote mark" />
            </div>
          </div>
          <div className="testimonial-right">
            <p className="testimonial-stars">★★★★★</p>
            <p className="testimonial-copy">{HOME_COPY.testimonialQuote}</p>
            <p className="testimonial-author">- {HOME_COPY.testimonialAuthor},</p>
            <p className="testimonial-author-role">{HOME_COPY.testimonialAuthorRole}</p>
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <div className="home-shell cta-shell">
          <h2>
            <span>Want To Launch Your Brand</span>
            <span>Into The Future?</span>
          </h2>
          <button type="button" className="brand-btn">
            {HOME_COPY.ctaAction}
          </button>
        </div>
      </section>

    </div>
  )
}

export default Home
