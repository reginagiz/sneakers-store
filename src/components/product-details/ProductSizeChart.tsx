import { Drawer, Button } from 'antd';
import React, { useState } from 'react';
import st from './ProductSizeChart.module.css'
import size from '../../images/size.png';
import foot from '../../images/foot.png';
import { CloseOutlined } from '@ant-design/icons'

const ProductSize: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button className={st.size_chart} onClick={showDrawer}>
        Size chart
      </button>
      <Drawer placement="right" onClose={onClose} open={open} width={620} closable={false} >
        <CloseOutlined onClick={onClose} />
        <div className={st.content}>
          <div>This size guide is approximate and is a guide only.</div>
          <img src={size} className={st.size} alt="logo"></img>
          <p>How to Take Foot Size?</p>
          <img src={foot} className={st.foot} alt="logo"></img>
          <p> You can find your foot length by measuring from your heel to your
            longest toe with a ruler or tape measure.</p>
          <div className={st.close}>
            <Button type='primary' onClick={onClose}>Close</Button>
          </div>
        </div>
      </Drawer>
    </>
  );
};
export default ProductSize;