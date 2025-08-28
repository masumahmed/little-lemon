import menu from './menu.json';
import { Link } from "react-router";

function Pills({ text }) {
    const handleEvent = () => {
        alert(`feature not implemented`);
    };

    return <>
        <div className='pill' onClick={handleEvent} >{text}</div>
    </>
}

function MenuItem({ title, description, price, img }) {
    return <>
        <div className="menu-item">
            <div className="col1">
                <b>{title}</b>
                <p>{description}</p>
                <b>{price}</b>
            </div>
            <div className="col2">
                <img src={img} alt={title} />
            </div>
        </div>
    </>
}

function Main() {
    const filterItems = ["lunch", "main", "dessert", "specials", "sides", "beverages"];

    return <>
        <main>
            <div className='filter'>
                {filterItems.map(item => (
                    <Pills key={item} text={item.charAt(0).toUpperCase() + item.slice(1)} />
                ))}
            </div>

            {menu.map((item, index) => (<>
                <Link to={`/menu/${item.id}`} key={index}>
                    <MenuItem
                        key={index}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        img={item.img}
                    />
                </Link>
            </>))}

        </main>
    </>
}

export default Main;
