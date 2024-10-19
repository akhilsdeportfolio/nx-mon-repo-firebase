import React, { startTransition, useState } from 'react';

import NxWelcome from './nx-welcome';
import { utils } from '@nx-mono/utils';

import { Route, Routes, useNavigate } from 'react-router-dom';

import {
  AlibabaOutlined,
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ShopOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';

const About = React.lazy(() => import('about/Module'));

const Shop = React.lazy(() => import('shop/Module'));

const Cart = React.lazy(() => import('cart/Module'));

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider theme="light" trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: 'home',
              icon: <HomeOutlined />,
              label: 'Home',
              onClick: () => {
                startTransition(() => {
                  navigate('/');
                });
              },
            },
            {
              key: 'about',
              icon: <AlibabaOutlined />,
              label: 'About',
              onClick: () => {
                startTransition(() => {
                  navigate('/about');
                });
              },
            },
            {
              key: 'shop',
              icon: <ShopOutlined />,
              label: 'Shop',
              onClick: () => {
                startTransition(() => {
                  navigate('/shop');
                });
              },
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            maxHeight: '85vh',
            overflow: 'auto',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {utils()}
          <Routes>
            <Route path="/" element={<NxWelcome title="shell" />} />
            <Route path="/about" element={<About />} />

            <Route path="/shop" element={<Shop />} />

            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
