import { Card } from 'antd';
import React from 'react';
import { Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Sneaker } from '../types'
import st from './ProductItem.module.css'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../store/busket/busketSlice';
import { NavLink } from 'react-router-dom';



const { Meta } = Card;

type ProductItemProps = {
  sneaker: Sneaker;
}

const ProductItem: React.FC<ProductItemProps> = ({ sneaker }) => {

  const dispatch = useDispatch();

  return (
    <div className={st.card}>
      <Card
        hoverable
        style={{ width: 350, height: 600 }}
        cover={<NavLink to={`/sneakers-item/${sneaker.id}`}>
          <img alt="example" src={sneaker.image} style={{ width: 350, height: 450 }} />
        </NavLink>
        }
      >
        <NavLink to={`/sneakers-item/${sneaker.id}`}>
          <Meta title={sneaker.title} />
          <div className={st.price}>{sneaker.price}</div>
        </NavLink>
        <div className={st.button_cart} >
          <Button onClick={() => dispatch(addToCart(sneaker))}
          type="primary" shape="circle" icon={<ShoppingCartOutlined />} />
        </div>
      </Card>
    </div>
  )

};

export default ProductItem;