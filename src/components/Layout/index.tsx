import { Breadcrumb, Layout } from 'antd';
import React  from 'react';
import BaseHeader from '../Header/Header';
import { useRoutes, Outlet } from 'react-router';
import './index.less';
import { useGetRoutes } from '../../router'

const {  Content, Footer } = Layout;
const BaseLayout: React.FC = ()  => {
 
  const RoutesBase = useGetRoutes();
  return  (
    <Layout className='base-layout'>
      <BaseHeader></BaseHeader>
      <Content className="site-layout" style={{ padding: '8px 24px'}}>
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        {RoutesBase}
        <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Jinwan ©2022 Created by Jinwan</Footer>
    </Layout>
  )
}

export default BaseLayout