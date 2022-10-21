import { incrementQuantity, decrementQuantity, removeItem } from '../../store/busket/busketSlice'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../store/busket/busketSlice';


const CartItem = () => {
    const dispatch = useDispatch()
    const cart = useSelector(getProduct);
    let item = cart?.map((i) => i.item.id)

    return (
        <div>
            Sneakers number {item}
        </div>
    )


    //   return (
    //     <div className="cartItem">
    //       <img className="cartItem__image" src={image} alt='item'/>
    //       <div className="cartItem__info">
    //         <p className="cartItem__title">{title}</p>
    //         <p className="cartItem__price">
    //           <small>$</small>
    //           <strong>{price}</strong>
    //         </p>
    //         <div className='cartItem__incrDec'>
    //           <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
    //           <p>{quantity}</p>
    //           <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
    //         </div>
    //         <button
    //           className='cartItem__removeButton' 
    //           onClick={() => dispatch(removeItem(id))}>
    //             Remove
    //         </button>
    //       </div>
    //     </div>
    //   )
}
export default CartItem