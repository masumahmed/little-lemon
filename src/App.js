import Home from './Home';
import Booking from './Booking';
import MenuItem from './MenuItem';
import Cart from './Cart';

import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
                <Route path="/reserve" element={<Booking />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/menu/:menuItem" element={<MenuItem cart={cart} addToCart={addToCart} />} />
            </Routes>
        </BrowserRouter>
    </>
}

export default App;
