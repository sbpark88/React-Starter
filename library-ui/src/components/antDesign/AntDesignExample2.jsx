import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import React from 'react';

const { Header, Content, Footer, Sider } = Layout;
const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

function AntDesignExample2() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const headerStyle = {
    ...flexCenterStyle,
    padding: 0,
    backgroundColor: colorBgContainer,
    font: 'bold 40px/1 sans-serif',
  };

  const contentChildStyle = {
    padding: 24,
    textAlign: 'center',
    background: colorBgContainer,
  };

  return (
    <Layout hasSider style={fullScreen}>
      <Sider style={siderStyle}>
        <div className='demo-logo-vertical' />
        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={['2']}
          items={items}
        />
      </Sider>
      <Layout className='site-layout' style={innerLayoutStyle}>
        <Header style={headerStyle}>샘플 헤더입니다!</Header>
        <Content style={contentStyle}>
          <div style={contentChildStyle}>
            <p>long content</p>
            {sampleContent}
          </div>
        </Content>
        <Footer style={footerStyle}>
          Ant Design ©2023 Created by Hogwarts
        </Footer>
      </Layout>
    </Layout>
  );
}

export default AntDesignExample2;

const fullScreen = {
  position: 'absolute',
  inset: 0,
  overflow: 'auto',
};

const siderStyle = {
  overflow: 'auto',
  height: '100vh',
  position: 'fixed',
  left: 0,
  top: 0,
  bottom: 0,
};

const innerLayoutStyle = {
  marginLeft: 200,
};

const contentStyle = {
  margin: '24px 16px 0',
  overflow: 'initial',
};

const footerStyle = {
  textAlign: 'center',
};

const sampleContent = Array.from({ length: 100 }, (_, index) => (
  <React.Fragment key={index}>
    {index % 20 === 0 && index ? 'more' : '...'}
    <br />
  </React.Fragment>
));

const flexCenterStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
