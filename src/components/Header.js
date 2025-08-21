import pasta from '../assets/img/pasta.jpg';

function Header() {
    return <>
        <header>
            <div className="col1">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>A cozy place for delicious Mediterranean food.</p>
                <br />
                <input type="button" value="Reserve a Table" />
            </div>
            <div className="col2">
                <img src={pasta} alt="Little Lemon" />
            </div>
        </header>
    </>
}

export default Header;
