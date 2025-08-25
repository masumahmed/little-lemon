import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import logo from '../assets/img/logo.png';
import { Link } from "react-router";


function Nav() {
    return <>
        <nav>
            <FontAwesomeIcon id="nav-icon" icon={faBars} />
            <img src={logo} id="logo" alt="logo icon" />
            <Link to="/cart">
                <FontAwesomeIcon id="nav-icon" icon={faShoppingCart} />
            </Link>
        </nav>
    </>
}

export default Nav;
