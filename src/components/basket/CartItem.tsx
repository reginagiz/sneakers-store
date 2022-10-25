import { incrementQuantity, decrementQuantity, removeItem } from '../../store/busket/busketSlice'
import { useDispatch } from 'react-redux'
import { ItemInCart } from '../../store/busket/busketSlice';
import st from './CartItem.module.css'

type CartItemProps = {
    item: ItemInCart
}
const CartItem = (props: CartItemProps) => {

    const dispatch = useDispatch()
    const { id } = props.item.item;
    const quantity = props.item.quantity;

    return (
        <div >
            <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
            <p>{quantity}</p>
            <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
        </div >
    )
}
export default CartItem;