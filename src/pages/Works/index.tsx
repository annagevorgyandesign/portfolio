import React from 'react'
import { Button, Typography } from 'antd'
import { ExportOutlined } from '@ant-design/icons'
import { BEHANCE_PROFILE_URL, WORKS_INTRO, WORKS_PROJECTS } from './consts'
import styles from './styles.module.css'

const { Title, Paragraph, Link } = Typography

const Works: React.FC = () => {
  return (
    <div className={styles.worksPage}>
      <div className={styles.shell}>
        <header className={styles.hero}>
          <Title level={1}>Works</Title>
          <Paragraph className={styles.lead}>{WORKS_INTRO}</Paragraph>
          <div className={styles.heroActions}>
            <Button
              type="primary"
              size="large"
              className={styles.primaryBtn}
              href={BEHANCE_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              icon={<ExportOutlined />}
            >
              View portfolio on Behance
            </Button>
            <Button
              type="default"
              size="large"
              className={styles.secondaryBtn}
              href={BEHANCE_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Hire on Behance
            </Button>
          </div>
        </header>

        <ul className={styles.projectGrid}>
          {WORKS_PROJECTS.map((project) => (
            <li key={project.imageSeed}>
              <article className={styles.projectCard}>
                <div className={styles.thumb}>
                  <img
                    src={`https://picsum.photos/seed/${project.imageSeed}/800/600`}
                    alt={`${project.title} preview`}
                    loading="lazy"
                  />
                </div>
                <div className={styles.cardBody}>
                  <Title level={5} className={styles.cardTitle}>
                    {project.title}
                  </Title>
                  <Link
                    href={BEHANCE_PROFILE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cardLink}
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
    </div>
  )
}

export default Works
