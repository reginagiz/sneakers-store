import { Card } from 'antd';
import React from 'react';
import { Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Sneaker } from '../types'
import st from './ProductItem.module.css'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../store/busket/busketSlice';
import { useNavigate } from 'react-router-dom';


const { Meta } = Card;

type ProductItemProps = {
  sneaker: Sneaker;
}

const ProductItem: React.FC<ProductItemProps> = ({ sneaker }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className={st.card}>
      <Card
        hoverable
        style={{ width: 350, height: 600 }}
        cover={<img alt="example" src={sneaker.image} style={{ width: 350, height: 450 }} />}
      >
        <Meta title={sneaker.title} />
        <div className={st.price_button}>
          <div className={st.price}>{sneaker.price}</div>
          <div className='shopping-cart' onClick={() => navigate('/cart')}>
            <Button onClick={() => dispatch(addToCart(sneaker))}
            type="primary" shape="circle" icon={<ShoppingCartOutlined />} className={st.button} />
          </div>
        </div>
      </Card>
    </div>
  )

};

export default ProductItem;