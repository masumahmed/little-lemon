import Nav from './components/Nav';
import Calendar from './components/calendar';

function Reserve() {
    return <>
        <Nav />
        <div>
            <h2>Reserve a Table</h2>
            <p>Monday to Friday: 10:00 AM - 10:00 PM</p>
        </div>

        <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <br />

            <Calendar />
            <br />

            <label htmlFor="time">Time:</label>
            <input type="time" id="time" name="time" required />
            <br />

            <label htmlFor="guests">Number of Guests:</label>
            <input type="number" id="guests" name="guests" min="1" required />
            <br />

            <button type="submit">Reserve</button>
        </form>
    </>
}

export default Reserve;
