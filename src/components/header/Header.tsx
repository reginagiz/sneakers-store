import React from 'react';
import st from './Header.module.css';
import logo from '../../images/logo.png';
import { Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeGender } from '../../store/all_products/ProductsSlise'
import { getProducts } from '../../store/busket/busketSlice';
import { Badge } from 'antd';

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGender = (gender: "women" | 'men' | '') => {
    navigate('/')
    dispatch(changeGender(gender))
  }
  const cart = useSelector(getProducts)
  const getTotalQuantity = () => {
    let total = 0
    cart?.forEach(item => {
      total += item.quantity
    })
    return total
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
      <NavLink to={'/cart'}>
        <div className={st.button} >
          <Badge count={getTotalQuantity()} showZero offset={[6, 11]}>
            <Button type="primary" shape="circle" icon={<ShoppingCartOutlined />} size='large' />
          </Badge>
        </div>
      </NavLink>
    </div >
  );
};

export default Header;