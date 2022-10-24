import { incrementQuantity, decrementQuantity, removeItem } from '../../store/busket/busketSlice'
import { useDispatch } from 'react-redux'
import { ItemInCart } from '../../store/busket/busketSlice';



type CartItemProps = {
    item: ItemInCart
}
const CartItem = (props: CartItemProps) => {

    const dispatch = useDispatch()
    const { title, id } = props.item.item;
    const quantity = props.item.quantity


    return (
        <div>
            {title}
            <div >
                <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
                <p>{quantity}</p>
                <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
            </div>
            <button
          className='cartItem__removeButton' 
          onClick={() => dispatch(removeItem(id))}>
            Remove
        </button>
        </div>
    )
}
export default CartItem;