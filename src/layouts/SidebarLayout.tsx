import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MENU_ITEMS } from '../constants/menu';
import { Layout, Menu } from 'antd';

const { Sider, Content } = Layout;

/**
 * Sidebar Layout，統一側邊選單框架，改用 Ant Design。
 */
const SidebarLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={200} theme="dark">
        <div style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', margin: '16px 0' }}>
          {import.meta.env.VITE_APP_TITLE || 'Frontend Demo'}
        </div>
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          style={{ height: '100%', borderRight: 0 }}
          items={MENU_ITEMS.map(item => ({
            key: item.path,
            icon: <span>{item.icon}</span>,
            label: <Link to={item.path}>{item.label}</Link>,
          }))}
        />
      </Sider>
      <Layout>
        <Content style={{ padding: '24px', background: '#f5f5f5' }}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default SidebarLayout;
