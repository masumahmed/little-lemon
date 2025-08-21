import menu from './menu.json';

function Pills({ text }) {
    return <>
        <pill>{text}</pill>
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
                <MenuItem
                    key={index}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    img={item.img}
                />
            </>))}

        </main>
    </>
}

export default Main;
