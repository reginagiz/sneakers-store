import React from 'react';
import st from './Header.module.css';
import logo from '../../logo.png';
import { Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className={st.header}>
      <div className={st.container}>
        <NavLink to ={'/'}>
          <img src={logo} className={st.logo} alt="logo"></img>
        </NavLink>
      </div>
        <div className={st.women}>For Women</div>
        <div className={st.men}>For Men</div>
      <Button type="primary" shape="circle" icon={<ShoppingCartOutlined />} />
    </div>
  );
};

export default Header;