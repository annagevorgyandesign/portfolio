import React from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Card, Layout, Typography } from 'antd';
import { HOME_COPY } from '../../components/Home/consts';
import styles from './styles.module.css';

const { Content } = Layout;
const { Text } = Typography;

const WriteMyCV: React.FC = () => {
  return (
    <Layout className={styles.cvLayout}>
      <Content className={styles.cvPage}>
        <Card bordered={false} className={styles.cvPaperCard}>
          <section className={styles.cvTopBanner}>
            <h1>ANNA GEVORGYAN</h1>
            <h2 className={styles.cvTitle}>
              <span className={styles.cvTitleFull}>UI/UX &amp; Product Designer, Graphic Designer</span>
              <span className={styles.cvTitleCompact}>UI/UX, Product and Graphic Designer</span>
            </h2>
            <p>Yerevan, Armenia</p>
          </section>

          <section className={styles.cvContactBlock}>
            <div className={styles.cvContactGrid}>
              <Text strong>WhatsApp, Viber:</Text>
              <Text>+374 55 40 88 20</Text>

              <Text strong>Email:</Text>
              <Text>anna.gevorgyan.design@gmail.com</Text>

              <Text strong>Portfolio:</Text>
              <Text>behance.net/annagevorgyan2</Text>

              <Text strong>LinkedIn:</Text>
              <Text>linkedin.com/in/annagevorgyan-design</Text>
            </div>
          </section>

          <section className={styles.cvSection}>
            <h3>SUMMARY</h3>
            <p>
              Results-driven and analytical UI/UX, Product, and Graphic Designer with a human-centered approach to
              creating intuitive and user-friendly experiences across both digital and print media.
            </p>
            <p>
              Drawing on a unique background in medicine (pediatrics) and finance (audit), I combine deep,
              clinical-level empathy with analytical precision to solve complex problems.
            </p>
          </section>

          <section className={styles.cvSection}>
            <h3>WORK EXPERIENCE</h3>

            <div className={styles.cvTwoColRow}>
              <div className={styles.cvLeftCol}>
                <h4>Upwork</h4>
                <p>UI/UX &amp; Product Designer,</p>
                <p>Graphic Designer</p>
                <p>June 2023 - Present</p>
              </div>
              <ul className={styles.cvRightCol}>
                <li>
                  Led a complete redesign of a client&apos;s website, focusing on improving user experience (UX) and
                  conversion rates
                </li>
                <li>Design projects from concept to execution</li>
                <li>Design Banners for digital ads, Brochures / Flyers, Social Media Banners, and Emails</li>
                <li>Design Presentations and Pitch Decks</li>
                <li>Design Logos, create and develop Brand Books</li>
                <li>Prepare printing materials</li>
                <li>Deliver creative solutions for business problems</li>
                <li>Amend designs after feedback</li>
                <li>Ensure final graphics and layouts are visually appealing and on-brand</li>
              </ul>
            </div>

            <div className={styles.cvTwoColRow}>
              <div className={styles.cvLeftCol}>
                <h4>Professionals LLC</h4>
                <p>Graphic Designer</p>
                <p>March 2022 - May 2024</p>
              </div>
              <ul className={styles.cvRightCol}>
                <li>
                  Designed and delivered a variety of projects, including Logos, Banners, Brochures, Flyers, Emails,
                  Business Cards, Social Media Post designs, and Presentations
                </li>
              </ul>
            </div>
          </section>

          <section className={styles.cvSection}>
            <h3>ACHIEVEMENTS</h3>
            <div className={styles.cvTwoColRow}>
              <div className={styles.cvLeftCol}>
                <h4>Upwork</h4>
              </div>
              <ul className={styles.cvRightCol}>
                <li>Recognized as a Top Rated 10% freelancer on Upwork with a consistent 100% Job Success Score</li>
                <li>Completed over 50 design projects with 100% client satisfaction</li>
                <li>
                  Designed branding materials for over 10 clients, resulting in one project increasing client sales by
                  20%
                </li>
              </ul>
            </div>
          </section>

          <section className={styles.cvSection}>
            <h3>EDUCATION</h3>
            <div className={styles.cvEducationItem}>
              <p>
                <strong>ARDY Academy</strong> | UI/UX and Product Design
              </p>
              <p>
                A comprehensive, 156-hour (7-month) education in UI/UX and Product Design, completed with Distinction
                as part of the AGBU Women Coders program.
              </p>
              <p>February 2025 - September 2025 | Yerevan, Armenia</p>
            </div>
            <div className={styles.cvEducationItem}>
              <p>
                <strong>ARDY Academy</strong> | Artificial Intelligence (AI)
              </p>
              <p>
                An intensive, one-month practical training on Artificial Intelligence (&quot;AI for Everyone&quot;),
                completed as part of the AGBU Women Coders program.
              </p>
              <p>August 2025 - September 2025 | Yerevan, Armenia</p>
            </div>
            <div className={styles.cvEducationItem}>
              <p>
                <strong>Pixel IT School</strong> | Graphic Design
              </p>
              <p>
                An intensive, 96-hour (4-month) practical course in Graphic Design, mentored by industry professionals
                David Vardanyan and Anais Gabrielyan.
              </p>
              <p>February 2022 - June 2022 | Yerevan, Armenia</p>
            </div>
            <div className={styles.cvEducationItem}>
              <p>
                <strong>International Accountancy Training Centre (IATC)</strong> | Master&apos;s degree, Accountancy
                and Audit
              </p>
              <p>Developed strong analytical and structured thinking skills.</p>
              <p>2005 - 2007 | Yerevan, Armenia</p>
            </div>
            <div className={styles.cvEducationItem}>
              <p>
                <strong>Yerevan State Medical University named after Mkhitar Heratsi</strong> | Medical Degree (MD),
                Pediatrics
              </p>
              <p>Developed a foundational understanding of human-centric problem-solving and empathy.</p>
              <p>1992 - 1999 | Yerevan, Armenia</p>
            </div>
          </section>

          <section className={styles.cvSection}>
            <h3>TECHNICAL SKILLS</h3>
            <p>
              <strong>UI/UX &amp; Product Design:</strong> UI/UX Design, Product Design, Web Design, Website Design,
              App Design, Landing Page Design, User Interface (UI) Design, User Research, Competitor Analysis,
              Personas, CJM, Sitemap &amp; Information Architecture, User Flows, Wireframing, Prototyping, Visual
              Design, Responsive &amp; Mobile Design, Atomic Design, Design Systems, Style Guides, UI Kit, Components
              &amp; Variants, Auto Layout, Usability Testing, A/B Testing
            </p>
            <p>
              <strong>Graphic Design &amp; Branding:</strong> Branding &amp; Brand Identity, Logo Design, Label &amp;
              Packaging Design, Print &amp; Marketing Materials (Brochure, Flyer, Poster), Banner Ad Design,
              Advertisement Design, Layout Design, Social Media Imagery, Infographics, Design Principles, Typography,
              Color Theory
            </p>
            <p>
              <strong>Presentation Design:</strong> Presentation &amp; Pitch Deck Design, GSLIDES, PPTX
            </p>
            <p>
              <strong>Tools &amp; Technologies:</strong> Figma, Adobe Creative Suite (Illustrator, Photoshop, Acrobat),
              Microsoft Office (Word, Excel, PowerPoint), Google Suite (Slides, Docs, Sheets, Forms), Jira, Trello,
              Asana, AI Tools
            </p>
          </section>

          <section className={styles.cvSection}>
            <h3>SOFT SKILLS</h3>
            <p>
              <strong>Empathy &amp; User-Centricity:</strong> Empathy, User-Centric Mindset
            </p>
            <p>
              <strong>Problem-Solving &amp; Critical Thinking:</strong> Design Thinking, Problem-Solving, Analytical
              Thinking, Creativity
            </p>
            <p>
              <strong>Communication &amp; Collaboration:</strong> Storytelling, Communication, Collaboration, Teamwork
            </p>
            <p>
              <strong>Professional Attributes:</strong> Adaptability, Time Management, Attention to Detail
            </p>
          </section>

          <section className={`${styles.cvSection} ${styles.cvLastSection}`}>
            <h3>LANGUAGES</h3>
            <ul className={styles.cvPlainList}>
              <li>Armenian (Native)</li>
              <li>English (Conversational)</li>
              <li>Russian (Conversational)</li>
            </ul>
          </section>
        </Card>

        <div className={styles.cvDownloadFooter}>
          <a href="/cv.pdf" download="Anna_Gevorgyan_CV.pdf" className={styles.cvDownloadLink}>
            <Button
              className={`${styles.cvDownloadBtn} ${styles.cvDownloadBtnDark}`}
              icon={<DownloadOutlined />}
            >
              {HOME_COPY.secondaryAction}
            </Button>
          </a>
        </div>
      </Content>
    </Layout>
  );
};

export default WriteMyCV;
