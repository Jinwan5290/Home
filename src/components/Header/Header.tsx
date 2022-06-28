import { Layout } from 'antd';
import React  from 'react';
import './Header.less';
import Logo from '../../assets/images/logo.png'
const { Header } = Layout;

const BaseHeader: React.FC = () => {
  return (
      <Header className="base-header">
        <div className='icon-area'>
          <img src={Logo} alt="" />
          JINWAN
        </div>
      </Header>
  );
}

export default BaseHeader;
