import React, { useState } from 'react';
import { Layout, Button, Typography } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import Portfolio from '../../pages/Portfolio';
import Works from '../../pages/Works';
import ContactPage from '../../pages/Contact';
import WriteMyCV from '../../pages/WriteMyCV';
import Gemini from '../../pages/Gemini';
import { FOOTER_LINKS } from '../Home/consts';
import styles from './styles.module.css';

const { Header, Content, Footer } = Layout;
const { Link } = Typography;

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'works' | 'contact' | 'cv' | 'gemini'>('home');

  return (
    <Layout className={styles.appLayout}>
      <Header className={styles.appHeader}>
        <div className={styles.brand} onClick={() => setView('home')}>
          Anna Gevorgyan
        </div>

        <nav className={styles.topNav}>
          <Button
            type="text"
            onClick={() => setView('home')}
            className={`${styles.navLink} ${view === 'home' ? styles.active : ''}`}
          >
            Home
          </Button>
          <Button
            type="text"
            onClick={() => setView('works')}
            className={`${styles.navLink} ${view === 'works' ? styles.active : ''}`}
          >
            Works
          </Button>
          <Button
            type="text"
            onClick={() => setView('gemini')}
            className={`${styles.navLink} ${view === 'gemini' ? styles.active : ''}`}
          >
            Gemini
          </Button>
          <Button
            type="text"
            onClick={() => setView('cv')}
            className={`${styles.navLink} ${view === 'cv' ? styles.active : ''}`}
          >
            CV Writer
          </Button>
          <Button
            type="text"
            onClick={() => setView('contact')}
            className={`${styles.navLink} ${view === 'contact' ? styles.active : ''}`}
          >
            Contact
          </Button>
        </nav>

        <div className={styles.headerActions}>
          <Button type="default" className={styles.downloadCvBtn}>
            <DownloadOutlined />
            <span>Download CV</span>
          </Button>
        </div>
      </Header>

      <Content className={styles.appContent}>
        {view === 'home' && <Portfolio />}
        {view === 'works' && <Works />}
        {view === 'contact' && <ContactPage />}
        {view === 'cv' && <WriteMyCV />}
        {view === 'gemini' && <Gemini onOpenCv={() => setView('cv')} />}
      </Content>

      <Footer className={styles.appFooter}>
        <div className={styles.appFooterShell}>
          <p className={styles.footerCopyright}>&copy; 2026 Anna Gevorgyan</p>
          <div className={styles.bottomFooterMeta}>
            <span>Yerevan, AM</span>
            <Link href="mailto:anna.gevorgyan.design@gmail.com">anna.gevorgyan.design@gmail.com</Link>
            <Link href="tel:+37455048820">+374 55 40 88 20</Link>
            <div className={styles.socialLinks}>
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