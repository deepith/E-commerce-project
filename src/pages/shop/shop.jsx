import React from 'react'
import PRODUCTS from "../../product";
import Product from './product';
import "./shop.css";

export const Shop = () => {
  return (
    <div className='shop'>
    <div className='shopTitle'>
    <h1>Deepith Shopmart</h1>
    </div>
    <div className='products'>
    {PRODUCTS.map((eachProduct) => 
        <Product data={eachProduct}/>
    )}

    </div>
    </div>
  )
}



export default Shop;