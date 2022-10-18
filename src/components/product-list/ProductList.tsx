import React, { useEffect, useState } from 'react';
import ProductItem from './product-item';
import st from './ProductList.module.css';
import { List } from 'antd';
import { Sneaker } from './types';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { requestProducts } from '../../store/all_products'
import { selectProducts, getGender  } from '../../store/all_products/ProductsSlise'
import { RootState } from '../../store';
import { Spin } from 'antd';


const ProductList: React.FC = () => {
    const dispatch = useDispatch();
    const sneakers = useSelector(selectProducts);
    const gender = useSelector(getGender);
    const loading = useSelector((state: RootState) => state.all_product.data);

    const filteredSneakers = gender === '' ? sneakers?.sneakers
        : sneakers?.sneakers.filter((item: Sneaker) => item.gender === gender);


    useEffect(() => {
        dispatch(requestProducts());
    }, []);


    return (
        <>
            {!sneakers ? (
                <div className={st.spin}>
                    <Spin size="large" />
                </div>
            ) : (

                <div className={st.list}>
                    <div className={st.title} >
                        All sneakers</div>
                    <div className={st.column}>
                        {filteredSneakers && <List
                            grid={{ gutter: 10, column: 3 }}
                            dataSource={filteredSneakers}
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
            )}
        </>
    )
}


export default ProductList;