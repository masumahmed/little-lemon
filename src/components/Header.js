import chef from '../assets/img/head_chef.jpg';
import { Link } from "react-router";

function Header() {
    return <>
        <header>
            <div className="col1">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>A cozy place for delicious Mediterranean food.</p>
                <br />
                {/* <input type="button" value="Reserve a Table" /> */}
                <Link to="/reserve">Reserve a Table</Link>
            </div>
            <div className="col2">
                <img src={chef} alt="Little Lemon" />
            </div>
        </header>
    </>
}

export default Header;
