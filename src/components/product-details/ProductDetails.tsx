import { Carousel } from 'antd';
import React, { useEffect } from 'react';
import { selectProductsItem } from '../../store/products_item/ProductsItemSlise';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { requestProducts } from '../../store/products_item'
import { useParams } from 'react-router-dom';
import ProductImages from './ProductImages';
import st from './ProductDetails.module.css'
import { Button, notification } from 'antd';
import { ShoppingOutlined, ExportOutlined } from '@ant-design/icons'
import { Spin } from 'antd';
import ProductSize from './ProductSizeChart';

const ProductDetails: React.FC = () => {
    const dispatch = useDispatch();
    const sneaker = useSelector(selectProductsItem);
    const loading = useSelector((state: RootState) => state.products_item.data);
    const params = useParams();

    useEffect(() => {
        dispatch(requestProducts(params.id));
    }, []);

    const sneak = sneaker?.[0]

    const openNotification = () => {
        notification.open({
            message: `${sneak?.title} have been added to busket!`,
            description:
                <div>
                    <div className={st.price}>{sneak?.price}</div>
                    <div>Brand : {sneak?.brand}</div>
                    <div>Color : {sneak?.color}</div>
                </div>,
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
    };

    return (
        <>
            {!sneak ? (
                <div className={st.spin}>
                    <Spin size="large" />
                </div>
            ) : (
                <div className={st.details}>
                    <div className={st.carousel}>
                        <Carousel autoplay
                            style={{
                                width: '700px',
                                height: '800px',
                            }}>
                            {sneak?.images.map((image: string) => (
                                <ProductImages image={image} />
                            ))}
                        </Carousel>
                    </div>
                    <div className={st.description}>
                        <div className={st.title}>{sneak?.title}</div>
                        <div className={st.gender}>{sneak?.gender === 'men' ? "Men's sneakers" : "Women's sneakers"}</div>
                        <div className={st.price}>{sneak?.price}</div>
                        <div>Brand : {sneak?.brand}</div>
                        <div>Color : {sneak?.color}</div>
                        <div className={st.image_cont}>
                            <img
                                src={sneak?.image} alt="Sneaker"
                                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                            />
                        </div>
                        <div>Size:</div>
                        <div className={st.size}>{sneak?.size.map((item: number) =>
                            <button className={st.size_item}>{item}</button>)}</div>
                        <ProductSize />
                        <Button type="primary" className={st.busket} onClick={openNotification}>
                            Add to busket</Button>
                        <div className={st.shipping_return}>
                            <div className={st.shipping}>
                                <ShoppingOutlined style={{ fontSize: '50px' }} />
                                <div>
                                    <p>Free shipping</p>
                                    Free shipping on orders of 150 USD or more
                                </div>
                            </div>
                            <div className={st.return}>
                                <ExportOutlined style={{ fontSize: '45px' }} />
                                <div>
                                    <p>Easy Returns and Exchanges</p>
                                    Possibility of return within 30 days of receiving the order
                                </div>
                            </div>
                        </div>
                        <p className={st.line} />
                        <div>{sneak?.description}</div>
                    </div>
                </div>
            )}
        </>
    )
};

export default ProductDetails;