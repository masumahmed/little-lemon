import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Reserve from './Reserve';
import Product from './Product';
import Cart from './Cart';

function App() {
    const [cart, setCart] = useState([]);

    const addToCart = (item, quantity) => {
        setCart(prevCart => {
            const existing = prevCart.find(cartItem => cartItem.id === item.id);
            if (existing) {
                return prevCart.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + quantity }
                        : cartItem
                );
            } else {
                return [...prevCart, { ...item, quantity }];
            }
        });
    };

    return <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/reserve" element={<Reserve />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/menu/:menuItem" element={<Product addToCart={addToCart} />} />
            </Routes>
        </BrowserRouter>
    </>
}

export default App;
