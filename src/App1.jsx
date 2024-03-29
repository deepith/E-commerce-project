import React from 'react';
import Navbar from "./components/navbar";
import Shop from "./pages/shop/shop";
import Cart from "./pages/cart/cart";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShopContextProvider } from './context/shop-context';
import "./App1.css";

function App() {
    return (
        <div className='App'>
        <ShopContextProvider>
          <Router>
          <Navbar />
            <Routes>
              <Route path="/" element={<Shop/>}/>
              <Route path="/cart" element={<Cart/>}/>
            </Routes>
          </Router>
          </ShopContextProvider>
        </div>
      );
}

export default App;