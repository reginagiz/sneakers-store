import React, { useEffect, MouseEvent } from 'react';
import st from './Header.module.css';
import logo from '../../logo.png';
import { Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeGender } from '../../store/all_products/ProductsSlise'


const Header = () => {

  const dispatch = useDispatch();

  const handleGender = (gender: "women" | 'men' | '') => {
    dispatch(changeGender(gender));
  }

  

  return (
    <div className={st.header}>
      <div className={st.container}>
        <NavLink to={'/'}>
          <img src={logo} className={st.logo} alt="logo"></img>
        </NavLink>
      </div>
      <button className={st.women} onClick={() => handleGender('women')} >For Women</button>
      <button className={st.men} onClick={() => handleGender('men')}>For Men</button>
      <Button type="primary" shape="circle" icon={<ShoppingCartOutlined />} size='large' className={st.button} />
    </div >
  );
};

export default Header;