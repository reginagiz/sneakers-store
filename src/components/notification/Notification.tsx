import { SmileOutlined } from '@ant-design/icons';
import { notification } from 'antd';
import { Sneaker } from '../product-list/types';


export const openNotification = (sneaker: Sneaker, productSize: number) => {
    notification.open({
        message: `${sneaker?.title} have been added to busket!`,
        description:
            <div>
                <div >{sneaker?.price} USD</div>
                <div>Brand : {sneaker?.brand}</div>
                <div>Color : {sneaker?.color}</div>
                <div>Size : {productSize} </div>
            </div>,
        icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    });
};
