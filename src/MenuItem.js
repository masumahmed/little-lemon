import Footer from './components/Footer';
import Nav from './components/Nav';
import Counter from './components/Counter';
import menuJson from './components/menu.json'; // Assuming you have a menu.json file with your menu items

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function MenuItem({ cart, addToCart }) {
    const [menuData, setMenuData] = useState(null);
    let { menuItem } = useParams();
    let [count, setCount] = useState(1);

    useEffect(() => {
        const item = menuJson.find(item => item.id === menuItem);
        setMenuData(item);
    }, [menuItem]);

    const handleClick = () => {
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
        const itemIndex = existingCart.findIndex(item => item.id === menuData.id);

        if (itemIndex > -1)
            existingCart[itemIndex].quantity += count;
        else
            existingCart.push({ ...menuData, quantity: count });

        localStorage.setItem("cart", JSON.stringify(existingCart));
    };

    return <>
        <Nav />
        <div className='product-container'>
            <img src={menuData?.img.substring(1)} alt={menuData?.title} />
            <div className="product-details">
                <h2>{menuData?.title}</h2>
                <p>{menuData?.description}</p>
                <b>Price: {menuData?.price}</b>
                <br />
                <Counter count={count} setCount={setCount} />
                <br />
                <button onClick={handleClick} className='button'>Add to Cart</button>
            </div>
        </div>
        <Footer />
    </>
}

export default MenuItem;
