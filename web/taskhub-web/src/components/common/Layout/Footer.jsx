import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer style={{ 
      textAlign: 'center',
      padding: '12px 24px',
      backgroundColor: '#001529',
      color: 'rgba(255, 255, 255, 0.65)',
      flexShrink: 0
    }}>
      TaskHub ©2024 Created with React & Ant Design
    </Footer>
  );
};

export default AppFooter;
