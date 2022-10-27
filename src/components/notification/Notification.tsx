import { SmileOutlined } from '@ant-design/icons';
import { notification } from 'antd';
import { Sneaker } from '../product-list/types';


export const openNotification = (props: Sneaker) => {
    notification.open({
        message: `${props?.title} have been added to busket!`,
        description:
            <div>
                <div >{props?.price} USD</div>
                <div>Brand : {props?.brand}</div>
                <div>Color : {props?.color}</div>
            </div>,
        icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    });
};
