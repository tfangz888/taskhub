import React from 'react';
import { Layout } from 'antd';
import AppHeader from './Header';
import AppFooter from './Footer';

const { Content } = Layout;

const AppLayout = ({ children }) => {
  return (
    <Layout style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      margin: 0,
      padding: 0,
      overflow: 'hidden'
    }}>
      <AppHeader />
      <Content style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '0px',
        margin: 0,
        overflow: 'auto',
        backgroundColor: '#f5f5f5',
        minHeight: 0
      }}>
        <div style={{
          flex: 1,
          padding: '24px',
          backgroundColor: '#fff',
          margin: '24px',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          {children}
        </div>
      </Content>
      <AppFooter />
    </Layout>
  );
};

export default AppLayout;
