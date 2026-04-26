import React from 'react';
import { Layout, Typography, Button, Space } from 'antd';
import { 
  ArrowRightOutlined, 
  DownloadOutlined, 
  MenuOutlined 
} from '@ant-design/icons';
import { 
  NAV_ITEMS, 
  SERVICE_ITEMS, 
  WORK_ITEMS, 
  STATS_ITEMS 
} from './consts';
import heroImage from '../../assets/hero.png';
import portfolioSetImage from '../../assets/portfolio-set.png';
import './styles.css';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;

/**
 * Main Portfolio Application Component
 * Organized into sections: Hero, Services, Works, Why Work With Me, and Testimonials.
 */
const App: React.FC = () => {
  return (
    <Layout className="app-layout">
      {/* --- Navigation Header --- */}
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
          <Space>
            <Button className="header-hire-btn" type="primary">Hire me</Button>
            <Button className="menu-button" type="text" icon={<MenuOutlined />} />
          </Space>
        </div>
      </Header>

      <Content className="app-content">
        {/* --- Hero Section --- */}
        <section id="home" className="hero-section">
          <div className="hero-copy">
            <Title level={1}>I Design, You Grow.</Title>
            <Paragraph>
              Creative UI/UX Design & Branding.<br />
              Quality is my first priority.
            </Paragraph>
            
            <div className="hero-actions">
              <Space size="middle">
                <Button type="primary" size="large" className="action-button">
                  Get In Touch
                </Button>
                <Button 
                  size="large" 
                  icon={<DownloadOutlined />} 
                  className="action-button"
                >
                  Download Resume
                </Button>
              </Space>
            </div>
          </div>
          
          <div className="hero-visual">
            <img src={heroImage} alt="Professional design showcase" />
          </div>
        </section>

        {/* --- Services Section --- */}
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

        {/* --- Works Section --- */}
        <section id="works" className="light-section works-section">
          <Title level={2}>My Works</Title>
          <div className="works-grid">
            {WORK_ITEMS.map((item, index) => (
              <article key={index} className="work-card">
                {/* Fixed line: Using 'item' directly as it is likely a string */}
                <span>{item}</span> 
              </article>
            ))}
          </div>
          <div className="works-showcase">
            <img src={portfolioSetImage} alt="Portfolio projects showcase" />
          </div>
          <Button className="section-cta works-cta">
            See More <ArrowRightOutlined />
          </Button>
        </section>

        {/* --- About / Statistics Section --- */}
        <section id="about" className="light-section why-section">
          <Title level={2}>Why Work With Me?</Title>
          <div className="why-grid">
            <article className="why-card atom-card">Atom Signature</article>
            
            <article className="why-card feature-card">
              <h3>Top Rated</h3>
              <Paragraph><Text strong>3%</Text> on Upwork</Paragraph>
            </article>

            <article className="why-card stat-card years-card">
              <h3>3+</h3>
              <p>Years of Experience</p>
            </article>

            <article className="about-copy">
              <Paragraph>
                I specialize in creating exceptional designs where Functionality meets Creativity, 
                transforming businesses into outstanding Brands.
              </Paragraph>
            </article>

            {STATS_ITEMS.map((item) => (
              <article key={item.label} className="why-card stat-card">
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </article>
            ))}
          </div>
        </section>

        {/* --- Testimonial Section --- */}
        <section id="testimonial" className="dark-section testimonial-section">
          <Title level={2}>Client Testimonial</Title>
          <div className="testimonial-body">
            <div className="testimonial-layout">
              <div className="testimonial-left">
                <span className="quote-icon">“</span>
              </div>
              <div className="testimonial-right">
                <div className="testimonial-stars">★★★★★</div>
                <Paragraph>
                  "Anna played a key role in our project. Her attention to detail 
                  is remarkable, and the results exceeded expectations."
                </Paragraph>
                <div className="testimonial-signature">
                  <Text strong>Evgeny</Text><br />
                  <Text type="secondary">Little Movers Marketing Director</Text>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Final Call to Action --- */}
        <section className="final-cta light-section">
          <Title level={2}>Want To Launch Your Brand Into The Future?</Title>
          <Button type="primary" size="large" className="final-cta-button">
            Contact Now
          </Button>
        </section>
      </Content>

      {/* --- Footer --- */}
      <Footer className="app-footer">
        <Paragraph>© {new Date().getFullYear()} Anna Gevorgyan</Paragraph>
        <div className="footer-meta">
          <span>Yerevan, AM</span> | 
          <span> anna.gevorgyan.design@gmail.com</span> | 
          <span> +374 55 40 88 20</span>
        </div>
      </Footer>
    </Layout>
  );
};

export default App;