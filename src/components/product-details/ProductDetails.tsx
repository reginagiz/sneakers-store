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



const ProductDetails: React.FC = () => {
    const dispatch = useDispatch();
    const sneaker = useSelector(selectProductsItem);
    const loading = useSelector((state: RootState) => state.products_item.data);
    const params = useParams();

    useEffect(() => {
        dispatch(requestProducts(params.id));
    }, []);

    const sneak = sneaker?.[0]

    return (
        <div className={st.details}>
            <div className={st.carousel}>
                <Carousel autoplay
                    style={{
                        width: '700px',
                        height: '700px',
                    }}>
                    {sneak?.images.map((image: string) => (
                        <ProductImages image={image} />
                    ))}
                </Carousel>
            </div>
            <div className={st.description}>
                <div>{sneak?.title}</div>
                <div>{sneak?.gender}</div>
                <div>{sneak?.price}</div>
                <div>Brand :{sneak?.brand}</div>
                <div>Color :{sneak?.color}</div>
                <div>{sneak?.size}</div>
            </div>
        </div>

    )
};

export default ProductDetails;