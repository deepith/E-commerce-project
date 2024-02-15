import React, { createContext, useState } from 'react';
import PRODUCTS from '../product';


export const ShopContext = createContext(null);

const DefaultCartStateValue = () => {
    let cart = {}
    for (let i = 1; i < PRODUCTS.length + 1; i++){
        cart[i] = 0
    }
    return cart;
};

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(DefaultCartStateValue());



    const addToCart = (itemID) => {
        setCartItems((prevItem) => ({...prevItem, [itemID]: prevItem[itemID] + 1}));
    };

    const removeFromCart = (itemID) => {
        setCartItems((prevItem) => ({...prevItem, [itemID]: prevItem[itemID] - 1}));
    };

    const ChangeCart = (itemID, newValue) => {
        setCartItems((prevItem) => ({...prevItem, [itemID]: newValue}));
    };



    const contextValue = {cartItems, addToCart, removeFromCart, ChangeCart};

    console.log(cartItems);



  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}
