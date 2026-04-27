import React, { useState } from 'react';
import { Layout, Button, Space } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { NAV_ITEMS } from './consts';
import Portfolio from '../../pages/portfolio'; 
import WriteMyCV from '../../pages/WriteMyCV';
import './styles.css';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  // State to switch between Home (Portfolio) and Gemini (AI Writer)
  const [view, setView] = useState<'home' | 'gemini'>('home');

  return (
    <Layout className="app-layout">
      {/* Global Header */}
      <Header className="app-header">
        <div 
          className="brand" 
          onClick={() => setView('home')} 
          style={{ cursor: 'pointer' }}
        >
          Design_Logo
        </div>
        
        <nav className="top-nav">
          <Button 
            type="text" 
            onClick={() => setView('home')}
            style={{ color: view === 'home' ? '#7c3aed' : 'inherit' }}
          >
            Home
          </Button>
          <Button 
            type="text" 
            onClick={() => setView('gemini')}
            style={{ color: view === 'gemini' ? '#7c3aed' : 'inherit' }}
          >
            AI CV Writer
          </Button>
          
          {/* Show section links only when on the home page */}
          {view === 'home' && NAV_ITEMS.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <Space>
            <Button className="header-hire-btn" type="primary">
              Hire me
            </Button>
            <Button 
              className="menu-button" 
              type="text" 
              icon={<MenuOutlined />} 
            />
          </Space>
        </div>
      </Header>

      {/* Main Content: Switches based on the current view */}
      <Content className="app-content">
        {view === 'home' ? (
          <Portfolio />
        ) : (
          <WriteMyCV />
        )}
      </Content>

      <Footer className="app-footer" style={{ textAlign: 'center' }}>
        <p>© {new Date().getFullYear()} Anna Gevorgyan | Yerevan, AM</p>
      </Footer>
    </Layout>
  );
};

export default App;