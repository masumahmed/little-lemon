import pasta from '../assets/img/pasta.jpg';

function Pills({ text }) {
    return <>
        <pill>{text}</pill>
    </>
}

function MenuItem({ title, description, price, img }) {
    return <>
        <item>
            <div className="col1">
                <h3>{title}</h3>
                <p>{description}</p>
                <b>{price}</b>
            </div>
            <div className="col2">
                <img src={img} alt={title} />
            </div>
        </item>
    </>
}

let data = [
    {
        "title": "Pasta",
        "description": "Pasta with a rich tomato sauce and fresh basil.",
        "price": "$12.99",
        "img": "../assets/img/pasta.jpg"
    }
]

function Main() {
    return <>
        <main>
            <filter>
                <Pills text="Mediterranean" />
                <Pills text="Mediterranean" />
                <Pills text="Mediterranean" />
            </filter>

            <MenuItem
                title="Pasta"
                description="Pasta with a rich tomato sauce and fresh basil."
                price="$12.99"
                img={pasta}
            />

            <hr />

            <MenuItem
                title="Pasta"
                description="Pasta with a rich tomato sauce and fresh basil."
                price="$12.99"
                img={pasta}
            />
        </main>
    </>
}

export default Main;
