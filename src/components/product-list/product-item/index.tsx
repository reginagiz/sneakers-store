import { Card } from 'antd';
import React, { useState } from 'react';
import { Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Sneaker } from '../types'
import st from './ProductItem.module.css'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../store/busket/busketSlice';
import { NavLink } from 'react-router-dom';
import { openNotification } from '../../notification/Notification';



const { Meta } = Card;

type ProductItemProps = {
  sneaker: Sneaker;
}

const ProductItem: React.FC<ProductItemProps> = ({ sneaker }) => {

  const dispatch = useDispatch();
  const [productSize, setProductSize] = useState(0);

  return (
    <div className={st.card}>
      <Card
        hoverable
        style={{ width: 350, height: 600 }}
        cover={<div>
          <NavLink to={`/sneakers-item/${sneaker.id}`}>
            <img alt="example" src={sneaker.image} style={{ width: 350, height: 450 }} />
          </NavLink>
          <div className={st.size}>{sneaker?.size.map((item: any) =>
            <button onClick={() => setProductSize(item)} className={st.size_item}>{item}</button>)}</div>
        </div>
        }
      >
        <NavLink to={`/sneakers-item/${sneaker.id}`}>
          <Meta title={sneaker.title} />
          <div className={st.price}>{sneaker.price} USD</div>
        </NavLink>
        {productSize === 0 ?
          (
            <div className={st.button_cart} >
              <Button disabled
                type="primary" shape="circle" icon={<ShoppingCartOutlined />} />
            </div>
          )
          : (
            <div className={st.button_cart} >
              <a onClick={() => { openNotification(sneaker, productSize ) }} >
                <Button onClick={() => dispatch(addToCart({ sneaker, productSize }))}
                type="primary" shape="circle" icon={<ShoppingCartOutlined />} />
              </a>
            </div>
          )}
      </Card>
    </div>
  )

};

export default ProductItem;