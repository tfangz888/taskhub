import React, { useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import { Link } from 'react-router-dom';
import { SunOutlined, MoonOutlined } from '@ant-design/icons';

const { Header } = Layout;

const AppHeader = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
  };

  const items = [
    {
      key: '1',
      label: <Link to="/task-square">任务广场</Link>,
    },
    {
      key: '2',
      label: <Link to="/statistics">统计数据</Link>,
    },
  ];

  return (
    <Header 
      style={{ 
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
      }}
    >
      <div />
      
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        items={items}
        style={{
          width: 'auto',
          border: 'none',
          backgroundColor: 'transparent',
          fontSize: '18px'
        }}
      />
      
      <Button
        type="text"
        icon={isDarkMode ? <SunOutlined /> : <MoonOutlined />}
        onClick={toggleTheme}
        style={{
          color: '#fff',
          fontSize: '16px',
          border: 'none',
          background: 'transparent'
        }}
      />
    </Header>
  );
};

export default AppHeader;
