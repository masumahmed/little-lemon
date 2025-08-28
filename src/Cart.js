import Nav from './components/Nav';
import Footer from './components/Footer';
import menu from './components/menu.json';
import { Link } from "react-router";

function Cart() {
    return <>
        <Nav />
        <cart>
            <h2>Your Cart</h2>
        </cart>
        <Footer />
    </>
}

export default Cart;
