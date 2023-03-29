import { useSelector } from 'react-redux'
import { getProducts } from '../../store/busket/busketSlice';
import { useDispatch } from 'react-redux'
import { Table, Button } from 'antd';
import { incrementQuantity, decrementQuantity, removeItem } from '../../store/busket/busketSlice'
import { ItemInCart } from '../../store/busket/busketSlice';
import { ColumnsType } from 'antd/lib/table';
import st from './Cart.module.css'
import { NavLink } from 'react-router-dom';
import emptycart from '../../images/emptycart.png';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(getProducts)

  const getTotal = () => {
    let totalPrice = 0
    cart?.forEach(itemInCart => {
      totalPrice += itemInCart.item.price * itemInCart.quantity
    })
    return { totalPrice }
  }
  const columns: ColumnsType<ItemInCart> = [
    {
      title: '',
      dataIndex: ['item', 'image'],
      key: 'image',
      render: (image) => (
        <div style={{ width: 100, height: 110 }}>
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
      dataIndex: 'item',
      key: 'item',
      render: (item) => (
        <div>
          <NavLink to={`/sneakers-item/${item.id}`}>
            {item.title}
          </NavLink>
        </div>
      )
    },
    {
      title: 'Size',
      dataIndex: 'productSize',
      key: 'productSize',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (quantity, item) => (
        <div key={item.item.id} className={st.quantity}>
          <Button onClick={() => dispatch(decrementQuantity({ productSize: item.productSize, id: item.item.id }))} size='small'>-</Button>
          <li>
            &nbsp;{quantity}&nbsp;
          </li>
          <Button onClick={() => dispatch(incrementQuantity({ productSize: item.productSize, id: item.item.id }))} size='small'>+</Button>
        </div>
      )
    },
    {
      title: 'Price',
      key: 'quantity',
      dataIndex: 'quantity',
      render: (quantity, item) => (
        <div>{item.item.price * quantity} USD</div>
      )
    },
    {
      title: 'Remove',
      key: 'action',
      render: (_, item) => (
        <Button
          onClick={() => dispatch(removeItem({ productSize: item.productSize, id: item.item.id }))}>
          X
        </Button>
      ),
    },

  ];
  return (
    cart ? <div className={st.cart}>
      <div className={st.title}>My shopping cart</div>
      <div className={st.table_container}>
        <Table columns={columns} dataSource={cart} className={st.table} pagination={false} />
        <div className={st.delivery_total}>
          <div className={st.delivery}>Delivery : 0 USD</div>
          <div className={st.total}>Total : {getTotal().totalPrice} USD</div>
        </div>
      </div>
    </div>
      : <div className={st.empty_cart}>
        <div className={st.image_container}>
          <img src={emptycart} className={st.img_cart} alt="cart"></img>
        </div>
        <div>Unfortunately, Your cart is empty</div>
        <div className={st.please}>Please Add Something in your Cart</div>
        <NavLink to={'/'}>
          <Button type="primary">Continue Shopping</Button>
        </NavLink>
      </div>
  )
}


export default Cart;