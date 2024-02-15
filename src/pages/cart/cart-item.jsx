import React, { useContext, useState } from 'react'
import {ShopContext} from '../../context/shop-context'

export const CartItem = (props) => {

    const {id, product, price, img} = props.data;
    const { addToCart, cartItems, removeFromCart, ChangeCart } = useContext(ShopContext)

    const cartItemAmount = cartItems[id]

    const onChangeValue = (event) => {
        const newValue = event.target.value;
        ChangeCart(id, newValue);

    }

  return (
    <div className='cartItem'>
        <img src={img}/>
        <div className='description'>
        <p><b>{product}</b></p>
        <p>₹{price}</p>
        <div className='countHandler'>
            <button onClick={() => removeFromCart(id)}>-</button>
            <input onChange={onChangeValue} value={cartItemAmount}></input>
            <button onClick={() => addToCart(id)}>+</button>
        </div>
        </div>
    </div>
  )
}
 
export default CartItem;