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
    <cart>
      <h2>Your Cart</h2>
      {/* include a garbage can button */}
      {cart.map(item => {
        const menuItem = MenuData.find(menuItem => menuItem.id === item.id);
        return (
          <div key={item.id} className="cart-item">
            <img src={menuItem?.img} alt={menuItem?.title} style={{ maxHeight: '100px', objectFit: 'cover', borderRadius: '10px' }} />
            <div>
              <h3>{menuItem?.title}</h3>
              <p>Quantity:</p>

              <span>


                <button onClick={() => {
                  const updatedCart = cart.filter(cartItem => cartItem.id !== item.id);
                  setCart(updatedCart);
                  localStorage.setItem("cart", JSON.stringify(updatedCart));
                }}>
                  🗑️
                </button>

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
              </span>

            </div>
            <br />
          </div>
        );
      })}
    </cart>
    <Footer />
  </>
}

export default Cart;
