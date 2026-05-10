import React from 'react'
import { Typography } from 'antd'
import { ExportOutlined } from '@ant-design/icons'
import { BEHANCE_PROFILE_URL, PORTFOLIO_MOCK_PROJECTS } from './consts'
import styles from './styles.module.css'

const { Title, Paragraph, Link } = Typography

const Portfolio: React.FC = () => {
  return (
    <section className={styles.section} aria-labelledby="portfolio-heading">
      <div className={styles.shell}>
        <header className={styles.header}>
          <Title level={2} id="portfolio-heading" className={styles.title}>
            My Work
          </Title>
          <Paragraph className={styles.subtitle}>
            A curated showcase of my design projects.
          </Paragraph>
        </header>

        <ul className={styles.grid}>
          {PORTFOLIO_MOCK_PROJECTS.map((project) => (
            <li key={project.id}>
              <article className={styles.card}>
                <div className={styles.thumb}>
                  <img src={project.imageSrc} alt={project.imageAlt} loading="lazy" />
                </div>
                <div className={styles.body}>
                  <Title level={5} className={styles.cardTitle}>
                    {project.title}
                  </Title>
                  <Link
                    href={BEHANCE_PROFILE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.behanceLink}
                  >
                    View on Behance
                    <ExportOutlined aria-hidden />
                  </Link>
                  <div className={styles.tags}>
                    {project.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Portfolio
