import logo from '../assets/img/logo.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router";

function Nav() {
    return <>
        <nav>
            <FontAwesomeIcon style={{ cursor: 'pointer' }} onClick={() => { alert('Feature not implemented') }} id="nav-icon" icon={faBars} />
            <Link to="/">
                <img src={logo} id="logo" alt="logo icon" />
            </Link>
            <Link to="/cart">
                <FontAwesomeIcon id="nav-icon" icon={faShoppingCart} />
            </Link>
        </nav>
    </>
}

export default Nav;
