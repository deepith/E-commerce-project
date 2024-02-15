import React, { useContext, useState } from 'react'
import { ShopContext } from '../../context/shop-context'
import PRODUCTS from "../../product";
import CartItem from './cart-item';
import "./cart.css";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { addToCart, cartItems} = useContext(ShopContext)


  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * (itemInfo.price);
      }
    }
    return totalAmount;
  };

  const totalAmoun = getTotalCartAmount();

  const navigate = useNavigate();

  
  return (
    <div className='cart'>
    <div>
      <h1>Your Cart Items</h1>
    </div>
    <div className='cartItems'>
    {PRODUCTS.map((eachProduct) => {
      if (cartItems[eachProduct.id] !== 0) {
        return <CartItem data={eachProduct} />
      }
    })}


    </div>

    {totalAmoun > 0 ?  
    <div className='checkout'>
    <p>SubTotal: ₹{totalAmoun}</p>
    <button onClick={() => navigate("/")}>Continue Shopping</button>
    <button>Checkout</button>
    </div> : <h1>Your Cart is Empty</h1>}
    </div>
  )
}

export default Cart;