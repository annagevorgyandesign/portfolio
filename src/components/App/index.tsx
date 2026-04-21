import { ArrowRightOutlined, DownloadOutlined, MenuOutlined } from '@ant-design/icons'
import { Button, Layout, Typography } from 'antd'
import heroImage from '../../assets/hero.png'
import portfolioSetImage from '../../assets/portfolio-set.png'
import { NAV_ITEMS, SERVICE_ITEMS } from './consts'
import './styles.css'

const { Header, Content, Footer } = Layout
const { Title, Paragraph } = Typography

const App = () => {
  return (
    <Layout className="app-layout">
      <Header className="app-header">
        <div className="brand">Design_Logo</div>
        <nav className="top-nav">
          {NAV_ITEMS.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <Button className="header-hire-btn">Hire me</Button>
          <Button className="menu-button" type="text" icon={<MenuOutlined />} />
        </div>
      </Header>

      <Content className="app-content">
        <section className="hero-section">
          <div className="hero-copy">
            <Title level={1}>I Design, You Grow.</Title>
            <Paragraph>
              Creative, UI/UX Design & Branding.
              <br />
              Quality is my first priority.
            </Paragraph>
            <div className="hero-actions">
              <Button className="action-button action-download" icon={<DownloadOutlined />}>
                Doanload Resume
              </Button>
              <Button className="action-button action-ghost">View Portfolio</Button>
            </div>
          </div>
          <div className="hero-visual">
            <img src={heroImage} alt="Abstract design visual" />
          </div>
        </section>

        <section id="services" className="dark-section services-section">
          <Title level={2}>My Services</Title>
          <div className="services-grid">
            {SERVICE_ITEMS.map((item) => (
              <article key={item.title} className="service-card">
                <div className="service-pill">
                  <h3>{item.title}</h3>
                </div>
                <p>{item.subtitle}</p>
              </article>
            ))}
          </div>
          <Button className="section-cta services-cta">All Services</Button>
        </section>

        <section id="works" className="light-section works-section">
          <Title level={2}>My Works</Title>
          <div className="works-showcase">
            <img src={portfolioSetImage} alt="Portfolio work showcase" />
          </div>
          <Button className="section-cta works-cta">
            See More <ArrowRightOutlined />
          </Button>
        </section>

        <section id="about" className="light-section why-section">
          <Title level={2}>Why Work With Me?</Title>
          <div className="why-grid">
            <article className="why-orbit" aria-hidden="true">
              <span className="orbit orbit-a" />
              <span className="orbit orbit-b" />
            </article>
            <article className="why-card feature-card">
              <h3>Top Rated</h3>
              <p>
                <strong>3%</strong> on Upwork
              </p>
            </article>
            <article className="why-card stat-card years-card">
              <h4>3+</h4>
              <p>Years of Experience</p>
            </article>
            <article className="about-copy">
              I specialize in creating exceptional designs where Functionality meets Creativity,
              transforming businesses into outstanding Brands that engage audiences.
            </article>
            <article className="why-card stat-card">
              <h4>100%</h4>
              <p>Job Success</p>
            </article>
            <article className="why-card stat-card">
              <h4>100+</h4>
              <p>Total Jobs on Upwork</p>
            </article>
            <article className="why-card stat-card">
              <h4>50+</h4>
              <p>Clients on Upwork</p>
            </article>
            <article className="why-card stat-card">
              <h4>110+</h4>
              <p>Total Hours on Upwork</p>
            </article>
          </div>
        </section>

        <section id="testimonial" className="dark-section testimonial-section">
          <Title level={2}>Client Testimonial</Title>
          <div className="testimonial-layout">
            <div className="testimonial-left" aria-hidden="true">
              <span className="quote-icon">“</span>
            </div>
            <div className="testimonial-right">
              <div className="testimonial-stars" aria-label="5 star rating">
                ★★★★★
              </div>
              <Paragraph>
                Anna played a key role in preparing and launching our new office in Florida. We
                collaborated closely for several months on our visual identity, and she brought it
                to life - from business cards and brochures to social media profiles and internal
                document templates.
              </Paragraph>
              <Paragraph>
                She was always available, adjusting to the time difference, and consistently
                delivered clean, thoughtful design options. Her attention to detail is remarkable -
                from photos and avatars to icons and typography. We even explored motion design for
                social media intros, and the results exceeded expectations.
              </Paragraph>
              <Paragraph>
                If you get the chance to work with her, you will be in good hands. She is not just
                a freelancer - she is a true design partner in your team.
              </Paragraph>
              <p className="testimonial-signature">- Evgeny,</p>
              <p className="testimonial-signature">Little Movers Marketing Director</p>
            </div>
          </div>
        </section>

        <section className="final-cta light-section">
          <Title level={2}>Want To Launch Your Brand Into The Future?</Title>
          <Button className="section-cta final-cta-button">Contact Now</Button>
        </section>
      </Content>

      <Footer className="app-footer">
        <p className="footer-copy">© 2026 Anna Gevorgyan</p>
        <div className="footer-meta">
          <span>Yerevan, AM</span>
          <span>anna.gevoryan.design@gmail.com</span>
          <span>+374 55 40 88 20</span>
        </div>
        <div className="footer-social" aria-label="social links">
          <span>Be</span>
          <span>in</span>
        </div>
      </Footer>
    </Layout>
  )
}

export default App
