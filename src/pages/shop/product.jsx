import React, { useContext, useState } from 'react'
import {ShopContext} from '../../context/shop-context'

export const Product = (props) => {

    const {id, product, price, img} = props.data;
    const { addToCart, cartItems } = useContext(ShopContext)

    const cartItemAmount = cartItems[id]

  return (
    <div className='productCard'>
    <img src={img} />
    <div className='productDetail'>
    <p><b>{product}</b></p>
    <p>₹{price}</p>
    </div>
    <button  onClick={() => addToCart(id)} className='addtoCardButton'>
    Add To Cart  {cartItemAmount > 0 ? <>({cartItemAmount}) </>  : null}
    </button>
    </div>
  );
};


export default Product;