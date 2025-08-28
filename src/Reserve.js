import Nav from './components/Nav';
import Calendar from './components/Calendar';
import Footer from './components/Footer';
import Counter from './components/Counter';
import { useState } from 'react';

function Reserve() {
    // form data
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        name: '',
        phone: '',
        guests: 1
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    const handleGuestChange = (newGuestCount) => {
        setFormData((prevData) => ({
            ...prevData,
            guests: newGuestCount
        }));
    };

    return <>
        <Nav />
        <reserve>
            <div>
                <h2>Reserve a Table</h2>
                <p>Monday to Friday: 10:00 AM - 10:00 PM</p>
            </div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="date">SELECT A DATE</label>
                <Calendar />
                <br />

                <label htmlFor="date">SELECT A TIME</label>
                <input className="input" value={formData.time} onChange={handleChange} type="time" id="time" name="time" placeholder='TIME' required />
                <br />

                <label htmlFor="name">NAME</label>
                <input className='input' value={formData.name} onChange={handleChange} type="text" id="name" name="name" required />
                <br />

                <label htmlFor="phone">PHONE NUMBER</label>
                <input className="input" type="text" id="phone" name="phone" required />
                <br />

                <label htmlFor="guests">NUMBER OF GUESTS</label>
                <Counter />
                <br />

                <button className="button" type="submit">Reserve</button>
            </form>
        </reserve>
        <Footer />
    </>
}

export default Reserve;
