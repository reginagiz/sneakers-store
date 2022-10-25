import { useSelector } from 'react-redux'
import { getProducts } from '../../store/busket/busketSlice';
import { useDispatch } from 'react-redux'
import { Table } from 'antd';
import { incrementQuantity, decrementQuantity, removeItem } from '../../store/busket/busketSlice'

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(getProducts)
    const cartItems = cart?.map((itemCart) => (itemCart.item))

    const columns = [
        {
            title: '',
            dataIndex: 'image',
            key: 'image',
            render: (image: string) => (
                <div style={{ width: 80, height: 90 }}>
                    <img
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        src={image}
                        alt="Product"
                    />
                </div>
            ),
        },
        {
            title: 'Description',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Quantity',
            dataIndex: 'id',
            key: 'id',
            render: (id: number) => (
                <div>
                    {cart?.map((cartItem) => (
                        <div key={id.toString()}>
                            <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
                            <li>
                                {cartItem.quantity}
                            </li>
                            <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
                        </div>
                    ))}
                </div>
            )
        },
        {
            title: 'Price',
            key: 'price',
            dataIndex: 'price',
        },

    ];
    return (
        cartItems ? <Table columns={columns} dataSource={cartItems} /> : <span>No data</span>
    )
}


export default Cart;