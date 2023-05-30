import React, { useEffect } from "react";
import ProductItem from "./product-item";
import st from "./ProductList.module.css";
import { Sneaker } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { requestProducts } from "../../store/all_products";
import {
  selectProducts,
  getGender,
  changeGender,
} from "../../store/all_products/ProductsSlise";
import { RootState } from "../../store";
import { Spin } from "antd";

const ProductList: React.FC = () => {
  const dispatch = useDispatch();
  const sneakers = useSelector(selectProducts);
  const gender = useSelector(getGender);
  const loading = useSelector((state: RootState) => state.all_product.data);
  const handleGender = (gender: "women" | "men" | "") => {
    dispatch(changeGender(gender));
  };

  const filteredSneakers =
    gender === ""
      ? sneakers?.sneakers
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
        <div className={st.products_list}>
          <div className={st.products_list_container}>
            <button className={st.title} onClick={() => handleGender("")}>
              All sneakers
            </button>
            <div className={st.products_items}>
              {filteredSneakers?.map((item: Sneaker) => (
                <ProductItem sneaker={item} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductList;
