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
  ];

  return (
    <Header style={{ display: 'flex', alignItems: 'center' }}>
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        items={items}
        style={{
          flex: 1,
          minWidth: 0,
        }}
      />
    </Header>
  );
};

export default AppHeader;
