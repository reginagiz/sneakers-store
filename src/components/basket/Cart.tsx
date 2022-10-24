import { useSelector } from 'react-redux'
import { getProducts } from '../../store/busket/busketSlice';
import CartItem from './CartItem';


const Cart = () => {
    const cart = useSelector(getProducts);
    return (
        <div >
            <div>
                <h3>Shopping Cart</h3>
                {cart?.map((cartItem) => (
                    <CartItem
                        key={cartItem.item.id}
                        item={cartItem}
                    />
                ))}
            </div>
        </div>
    )
}
export default Cart;