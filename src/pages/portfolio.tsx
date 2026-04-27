import React from 'react';
import { Typography, Button, Space } from 'antd';
import { 
  ArrowRightOutlined, 
  DownloadOutlined 
} from '@ant-design/icons';
import { 
  SERVICE_ITEMS, 
  WORK_ITEMS, 
  STATS_ITEMS 
} from '../components/App/consts';
import heroImage from '../assets/hero.png';
import portfolioSetImage from '../assets/portfolio-set.png';

const { Title, Paragraph, Text } = Typography;

/**
 * Main Portfolio Page Component
 * Contains the full landing page content
 */
const Portfolio: React.FC = () => {
  return (
    <div className="portfolio-page">
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
          <img src={heroImage} alt="Abstract design visual" />
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
              <span>{item}</span> 
            </article>
          ))}
        </div>
        <div className="works-showcase">
          <img src={portfolioSetImage} alt="Portfolio work showcase" />
        </div>
        <Button className="section-cta works-cta">
          See More <ArrowRightOutlined />
        </Button>
      </section>

      {/* --- About Section --- */}
      <section id="about" className="light-section why-section">
        <Title level={2}>Why Work With Me?</Title>
        <div className="why-grid">
          <article className="why-card feature-card">
            <h3>Top Rated</h3>
            <Paragraph><Text strong>3%</Text> on Upwork</Paragraph>
          </article>

          <article className="about-copy">
            <Paragraph>
              I specialize in creating exceptional designs where Functionality meets Creativity.
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
    </div>
  );
};

export default Portfolio;