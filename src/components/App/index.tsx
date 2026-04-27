import React, { useState } from 'react';
import { Layout, Button, Typography } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import Portfolio from '../../pages/portfolio';
import WriteMyCV from '../../pages/WriteMyCV';
import Gemini from '../../pages/Gemini';
import { FOOTER_LINKS } from '../Home/consts';
import './styles.css';

const { Header, Content, Footer } = Layout;
const { Link } = Typography;

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'cv' | 'gemini'>('home');

  return (
    <Layout className="app-layout">
      <Header className="app-header">
        <div className="brand" onClick={() => setView('home')}>
          Anna Gevorgyan
        </div>

        <nav className="top-nav">
          <Button
            type="text"
            onClick={() => setView('home')}
            className={`nav-link ${view === 'home' ? 'active' : ''}`}
          >
            Home
          </Button>
          <Button
            type="text"
            onClick={() => setView('gemini')}
            className={`nav-link ${view === 'gemini' ? 'active' : ''}`}
          >
            Gemini
          </Button>
          <Button
            type="text"
            onClick={() => setView('cv')}
            className={`nav-link ${view === 'cv' ? 'active' : ''}`}
          >
            CV Writer
          </Button>
        </nav>

        <div className="header-actions">
          <Button type="default" className="download-cv-btn">
            <DownloadOutlined />
            <span>Download CV</span>
          </Button>
        </div>
      </Header>

      <Content className="app-content">
        {view === 'home' && <Portfolio />}
        {view === 'cv' && <WriteMyCV />}
        {view === 'gemini' && <Gemini />}
      </Content>

      <Footer className="app-footer">
        <div className="app-footer-shell">
          <p className="footer-copyright">&copy; 2026 Anna Gevorgyan</p>
          <div className="bottom-footer-meta">
            <span>Yerevan, AM</span>
            <Link href="mailto:anna.gevorgyan.design@gmail.com">anna.gevorgyan.design@gmail.com</Link>
            <Link href="tel:+37455048820">+374 55 40 88 20</Link>
            <div className="social-links">
              {FOOTER_LINKS.map((link) => (
                <Link href="#/" key={link}>
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Footer>
    </Layout>
  );
};

export default App;