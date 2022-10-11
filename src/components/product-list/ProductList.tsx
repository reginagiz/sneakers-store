import React, { useEffect } from 'react';
import ProductItem from './product-item';
import st from './ProductList.module.css';
import { List } from 'antd';
import { Sneakers } from './types';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { requestProducts } from '../../store/all_products'
import { selectProducts } from '../../store/all_products/ProductsSlise'
import { RootState } from '../../store';

const ProductList: React.FC = () => {
    const dispatch = useDispatch();
    const sneakers = useSelector(selectProducts);
    const loading = useSelector((state: RootState) => state.all_product.data);


    useEffect(() => {
        dispatch(requestProducts());
    }, []);


    return (
        <div className={st.list}>
            <div className={st.title}>
                All sneakers</div>
            <div className={st.column}>
                {sneakers && <List
                    grid={{ gutter: 10, column: 3 }}
                    dataSource={sneakers.sneakers}
                    renderItem={item => (
                        <List.Item>
                            <NavLink to={`/sneakers-item/${item.id}`}>
                                <ProductItem sneaker={item} />
                            </NavLink>
                        </List.Item>
                    )}
                />}
            </div>
        </div>
    )
}


export default ProductList;