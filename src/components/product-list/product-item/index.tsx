import { Card } from 'antd';
import React from 'react';
import { Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Sneaker } from '../types'
import st from './ProductItem.module.css'

const { Meta } = Card;

type ProductItemProps = {
  sneaker: Sneaker;
}

const ProductItem: React.FC<ProductItemProps> = ({ sneaker }) => {
  return (
    <div className={st.card}>
      <Card
        hoverable
        style={{ width: 350 }}
        cover={<img alt="example" src={sneaker.image} />}
      >
        <Meta title={sneaker.title} />
        <div className={st.price_button}>
          <div className={st.price}>{sneaker.price}</div>
          <Button type="primary" shape="circle" icon={<ShoppingCartOutlined />} className={st.button} />
        </div>
      </Card>
    </div>
  )

};

export default ProductItem;