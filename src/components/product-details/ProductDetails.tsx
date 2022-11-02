import { Carousel } from 'antd';
import React, { useEffect, useState } from 'react';
import { selectProductsItem } from '../../store/products_item/ProductsItemSlise';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { requestProducts } from '../../store/products_item'
import { useParams } from 'react-router-dom';
import ProductImages from './ProductImages';
import st from './ProductDetails.module.css'
import { Button, Popconfirm, Spin } from 'antd';
import { ShoppingOutlined, ExportOutlined } from '@ant-design/icons'
import ProductSize from './ProductSizeChart';
import { addToCart } from '../../store/busket/busketSlice';
import { openNotification } from '../notification/Notification';


const ProductDetails: React.FC = () => {
    const dispatch = useDispatch();
    const sneaker = useSelector(selectProductsItem);
    const params = useParams();
    const [productSize, setProductSize] = useState(0);
    useEffect(() => {
        dispatch(requestProducts(params.id));
    }, []);


    return (
        <>
            {!sneaker ? (
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
                            {sneaker?.images.map((image: string) => (
                                <ProductImages image={image} />
                            ))}
                        </Carousel>
                    </div>
                    <div className={st.description}>
                        <div className={st.title}>{sneaker?.title}</div>
                        <div className={st.gender}>{sneaker?.gender === 'men' ? "Men's sneakers" : "Women's sneakers"}</div>
                        <div className={st.price}>{sneaker?.price} USD</div>
                        <div>Brand : {sneaker?.brand}</div>
                        <div>Color : {sneaker?.color}</div>
                        <div className={st.image_cont}>
                            <img
                                src={sneaker?.image} alt="Sneaker"
                                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                            />
                        </div>
                        <div>Size:</div>
                        <div className={st.size}>{sneaker?.size.map((item: any) =>
                            <button onClick={() => setProductSize(item)} className={st.size_item}>{item}</button>)}</div>
                        <ProductSize />
                        {productSize === 0 ?
                            (
                                <Popconfirm title="Please choose your size" okText="Ok" cancelText="Cancel" className={st.popconfirm}>
                                    <Button type="primary" className={st.busket} >
                                        Add to busket
                                    </Button>
                                </Popconfirm>
                            )
                            : (
                                <a onClick={() => { openNotification(sneaker, productSize) }} >
                                    <Button type="primary" className={st.busket} onClick={() => dispatch(addToCart({ sneaker, productSize }))}>
                                        Add to busket
                                    </Button>
                                </a>
                            )}
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
                        <div>{sneaker?.description}</div>
                    </div>
                </div>
            )
            }
        </>
    )
};

export default ProductDetails;