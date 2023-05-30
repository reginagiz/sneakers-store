import { Card } from "antd";
import React, { useState } from "react";
import { Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Sneaker } from "../types";
import st from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/busket/busketSlice";
import { NavLink } from "react-router-dom";
import { openNotification } from "../../notification/Notification";

const { Meta } = Card;

type ProductItemProps = {
  sneaker: Sneaker;
};

const ProductItem: React.FC<ProductItemProps> = ({ sneaker }) => {
  const dispatch = useDispatch();
  const [productSize, setProductSize] = useState(0);

  const addSneakerToCart = () => {
    dispatch(addToCart({ sneaker, productSize }));
    openNotification(sneaker, productSize);
  };

  return (
    <div className={st.card}>
      <Card
        hoverable
        style={{ width: 320, height: 500 }}
        cover={
          <div>
            <NavLink to={`/sneakers-item/${sneaker.id}`}>
              <img
                alt="sneakers"
                src={sneaker.image}
                style={{ width: 320, height: 400 }}
              />
            </NavLink>
            <div className={st.size_buttons}>
              {sneaker?.size.map((item: number) => (
                <button
                  onClick={() => setProductSize(item)}
                  className={st.size_button}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        }
      >
        <div className={st.sneaker_info_container}>
          <NavLink to={`/sneakers-item/${sneaker.id}`}>
            <div className={st.sneaker_title_price}>
              <Meta title={sneaker.title} />
              <h3 className={st.price}>{sneaker.price} USD</h3>
            </div>
          </NavLink>
          {productSize === 0 ? (
            <div className={st.button_cart}></div>
          ) : (
            <div className={st.button_cart}>
              <Button
                onClick={() => addSneakerToCart()}
                type="primary"
                shape="circle"
                icon={<ShoppingCartOutlined />}
              />
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default ProductItem;
