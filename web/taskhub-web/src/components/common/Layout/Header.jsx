import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const AppHeader = () => {
  const items = [
    {
      key: '1',
      label: <Link to="/task-square">任务广场</Link>,
    },
    {
      key: '2',
      label: <Link to="/statistics">统计数据</Link>,
    },
    {
      key: '3',
      label: <Link to="/dashboard">仪表盘</Link>,
    },
    {
      key: '4',
      label: <Link to="/users">用户管理</Link>,
    },
    {
      key: '5',
      label: <Link to="/settings">设置</Link>,
    },
  ];

  return (
    <Header 
      style={{ 
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        padding: 0
      }}
    >
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        items={items}
        style={{
          width: 'auto',
          border: 'none',
          backgroundColor: 'transparent'
        }}
      />
    </Header>
  );
};

export default AppHeader;
