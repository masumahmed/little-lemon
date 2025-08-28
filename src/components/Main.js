import menu from './menu.json';
import { Link } from "react-router";

function Pills({ text }) {
    const handleEvent = () => {
        alert(`feature not implemented`);
    };

    return <>
        <pill onClick={handleEvent} >{text}</pill>
    </>
}

function MenuItem({ title, description, price, img }) {
    return <>
        <item className="menu-item">
            <div className="col1">
                <b>{title}</b>
                <p>{description}</p>
                <b>{price}</b>
            </div>
            <div className="col2">
                <img src={img} alt={title} />
            </div>
        </item>
    </>
}

function Main() {
    return <>
        <main>
            <filter>
                <Pills text="Lunch" />
                <Pills text="Main" />
                <Pills text="Dessert" />
                <Pills text="Specials" />
                <Pills text="Sides" />
                <Pills text="Beverages" />
            </filter>

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
