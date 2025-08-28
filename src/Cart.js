import Nav from './components/Nav';
import Footer from './components/Footer';
import MenuData from './components/menu.json';
import Counter from './components/Counter';

import { useEffect, useState } from 'react';

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  return <>
    <Nav />
    <div className='cart'>
      <h2>Your Cart</h2>

      {cart.map(item => {
        const menuItem = MenuData.find(menuItem => menuItem.id === item.id);
        return (
          <div key={item.id} className="cart-item">
            <img src={menuItem?.img} alt={menuItem?.title} style={{ maxHeight: '100px', objectFit: 'cover', borderRadius: '10px' }} />
            <div>
              <h3>{menuItem?.title}</h3>
              <p>Price per unit: {menuItem?.price}</p>
              <p>
                Subtotal: $
                {menuItem && item.quantity
                  ? (parseFloat(menuItem.price.replace(/[^0-9.]/g, "")) * item.quantity).toFixed(2)
                  : "0.00"}
              </p>
              <p>Quantity: {item.quantity}</p>
              <span>
                <Counter count={item.quantity} setCount={(newCount) => {
                  const updatedCart = cart.map(cartItem => {
                    if (cartItem.id === item.id) {
                      return { ...cartItem, quantity: newCount };
                    }
                    return cartItem;
                  });
                  setCart(updatedCart);
                  localStorage.setItem("cart", JSON.stringify(updatedCart));
                }} />

                <button onClick={() => {
                  if (window.confirm('Are you sure you want to remove this item from the cart?')) {
                    const updatedCart = cart.filter(cartItem => cartItem.id !== item.id);
                    setCart(updatedCart);
                    localStorage.setItem("cart", JSON.stringify(updatedCart));
                  }
                }}>
                  🗑️
                </button>
              </span>

            </div>
          </div>
        );
      })}

      <h3>
        Total: ${cart.reduce((total, item) => {
          const menuItem = MenuData.find(menuItem => menuItem.id === item.id);
          const price = menuItem?.price ? parseFloat(menuItem.price.replace(/[^0-9.]/g, "")) : 0;
          return total + price * item.quantity;
        }, 0).toFixed(2)}
      </h3>

      <button className="button" onClick={() => {
        alert('Checkout feature not implemented yet.');
      }}>
        Checkout
      </button>

    </div>
    <Footer />
  </>
}

export default Cart;
