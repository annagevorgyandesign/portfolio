import React, { useState } from 'react';
import { Layout, Button, Typography, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import Portfolio from '../../pages/Portfolio';
import Works from '../../pages/Works';
import ContactPage from '../../pages/Contact';
import WriteMyCV from '../../pages/WriteMyCV';
import Gemini from '../../pages/Gemini';
import DID from '../../pages/DID';
import DID2 from '../../pages/DID2';
import { FOOTER_LINKS } from '../Home/consts';
import styles from './styles.module.css';

const { Header, Content, Footer } = Layout;
const { Link } = Typography;

type AppView = 'home' | 'works' | 'contact' | 'cv' | 'gemini' | 'did' | 'did2';

const MENU_LINKS: { view: AppView; label: string }[] = [
  { view: 'home', label: 'Home' },
  { view: 'works', label: 'Works' },
  { view: 'gemini', label: 'AI Assistant' },
  { view: 'did', label: 'D-ID' },
  { view: 'did2', label: 'D-ID 2' },
  { view: 'cv', label: 'CV Writer' },
  { view: 'contact', label: 'Contact' },
];

const App: React.FC = () => {
  const [view, setView] = useState<AppView>('home');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const goTo = (next: AppView) => {
    setView(next);
    setDrawerOpen(false);
  };

  return (
    <Layout className={styles.appLayout}>
      <Header className={styles.appHeader}>
        <div className={styles.headerShell}>
          <div className={styles.brand} onClick={() => goTo('home')}>
            Anna Gevorgyan
          </div>

          <nav className={`${styles.topNav} ${styles.desktopNav}`} aria-label="Primary">
            {MENU_LINKS.map(({ view: itemView, label }) => (
              <Button
                key={itemView}
                type="text"
                onClick={() => setView(itemView)}
                className={`${styles.navLink} ${view === itemView ? styles.active : ''}`}
              >
                {label}
              </Button>
            ))}
          </nav>

          <div className={`${styles.headerActions} ${styles.desktopNav}`}>
            <Button
              type="default"
              className={styles.downloadCvBtn}
              onClick={() => setView('contact')}
            >
              Contact Me
            </Button>
          </div>

          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={() => setDrawerOpen(true)}
            className={styles.menuButton}
            aria-label="Open navigation menu"
          />
        </div>
      </Header>

      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        rootClassName={styles.navDrawerRoot}
      >
        <div className={styles.drawerNav}>
          {MENU_LINKS.map(({ view: itemView, label }) => (
            <Button
              key={itemView}
              type="text"
              onClick={() => goTo(itemView)}
              className={`${styles.drawerNavBtn} ${view === itemView ? styles.drawerNavBtnActive : ''}`}
            >
              {label}
            </Button>
          ))}
          <Button type="default" className={styles.drawerCtaBtn} onClick={() => goTo('contact')}>
            Contact Me
          </Button>
        </div>
      </Drawer>

      <Content
        className={`${styles.appContent} ${view === 'gemini' ? styles.appContentGemini : ''}`}
      >
        {view === 'home' && (
          <Portfolio
            onOpenContact={() => setView('contact')}
            onOpenWorks={() => setView('works')}
          />
        )}
        {view === 'works' && <Works onOpenContact={() => setView('contact')} />}
        {view === 'contact' && <ContactPage />}
        {view === 'cv' && <WriteMyCV />}
        {view === 'gemini' && <Gemini onOpenCv={() => setView('cv')} />}
        {view === 'did' && <DID />}
        {view === 'did2' && <DID2 />}
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
                <Link href={link.href} key={link.label} target="_blank" rel="noopener noreferrer">
                  {link.label}
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