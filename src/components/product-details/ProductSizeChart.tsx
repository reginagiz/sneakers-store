import { Drawer, Button } from "antd";
import React, { useEffect, useState } from "react";
import st from "./ProductSizeChart.module.css";
import size from "../../images/size.png";
import sizefoot from "../../images/sizefoot.png";
import { CloseOutlined } from "@ant-design/icons";

const ProductSize: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(352);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(352);
    } else {
      setIsMobile(580);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button className={st.size_chart_button} onClick={showDrawer}>
        Size chart
      </button>
      <Drawer
        placement="right"
        onClose={onClose}
        open={open}
        width={isMobile}
        closable={false}
      >
        <CloseOutlined onClick={onClose} />
        <div className={st.size_chart}>
          <div className={st.size_chart_container}>
            <h3>This size guide is approximate and is a guide only.</h3>
            <div className={st.size_table_img_container}>
              <img src={size} alt="size_table"></img>
            </div>
            <div className={st.foot_img_container}>
              <img src={sizefoot} alt="foot"></img>
            </div>
            <p>
              You can find your foot length by measuring from your heel to your
              longest toe with a ruler or tape measure.
            </p>
            <Button
              type="primary"
              onClick={onClose}
              className={st.close_button}
            >
              Close
            </Button>
          </div>
        </div>
      </Drawer>
    </>
  );
};
export default ProductSize;
