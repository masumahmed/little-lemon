import Footer from './components/Footer';
import Nav from './components/Nav';
import Counter from './components/Counter';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import menuJson from './components/menu.json'; // Assuming you have a menu.json file with your menu items

function Product({ addToCart }) {
    let { menuItem } = useParams();
    let [count, setCount] = useState(1);

    // get json data from data.json for menu item
    const [menuData, setMenuData] = useState(null);

    useEffect(() => {
        const item = menuJson.find(item => item.id === menuItem);
        setMenuData(item);
    }, [menuItem]);

    useEffect(() => {
        console.log(count);
    }, [count]);

    const handleClick = () => {
        // create cart if it doesn't exist
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
        localStorage.setItem("cart", JSON.stringify([...existingCart, { ...menuData, quantity: count }]));

        if (menuData) {
            addToCart(menuData, count);
        }
    };

    return <>
        <Nav />

        <div className='product-container'>
            <img src={menuData?.img.substring(1)} alt={menuData?.title} />
            <div className="product-details">
                <h2>{menuData?.title}</h2>
                <p>{menuData?.description}</p>
                <b>Price: ${menuData?.price}</b>
                <br />
                <Counter count={count} setCount={setCount} />
                <br />
                <button onClick={handleClick} className='button'>Add to Cart</button>
            </div>
        </div>
        <Footer />
    </>
}

export default Product;
