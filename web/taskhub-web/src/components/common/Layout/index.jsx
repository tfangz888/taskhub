import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import AppHeader from './Header';
import AppFooter from './Footer';

const { Content } = Layout;

const AppLayout = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      const theme = document.body.getAttribute('data-theme');
      setIsDarkMode(theme === 'dark');
    };
    
    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.body, { attributes: true, attributeFilter: ['data-theme'] });
    
    return () => observer.disconnect();
  }, []);

  return (
    <Layout style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      margin: 0,
      padding: 0,
      overflow: 'hidden',
      backgroundColor: isDarkMode ? '#141414' : '#f5f5f5'
    }}>
      <AppHeader />
      <Content style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '0px',
        margin: 0,
        overflow: 'auto',
        backgroundColor: isDarkMode ? '#141414' : '#f5f5f5',
        minHeight: 0
      }}>
        <div style={{
          flex: 1,
          padding: '24px',
          backgroundColor: isDarkMode ? '#1a1a1a' : '#fff',
          margin: isDarkMode ? '16px' : '24px',
          borderRadius: '8px',
          boxShadow: isDarkMode ? '0 2px 8px rgba(0,0,0,0.3)' : '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          {children}
        </div>
      </Content>
      <AppFooter />
    </Layout>
  );
};

export default AppLayout;
