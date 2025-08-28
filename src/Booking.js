import Nav from './components/Nav';
import Calendar from './components/Calendar';
import Counter from './components/Counter';
import Footer from './components/Footer';

import { useEffect, useState } from 'react';

function Booking() {
    let [guests, setGuests] = useState(1);

    const [formData, setFormData] = useState({
        date: '',
        time: '',
        name: '',
        phone: '',
        guests: guests
    });

    useEffect(() => {
        setFormData((prevData) => ({
            ...prevData,
            guests: guests
        }));
    }, [guests]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (formData.date && formData.time && formData.name && formData.phone && formData.guests) {
            alert("Booking made!");
            window.history.back();
            console.log(formData);
        }
        else if (!formData.date) {
            alert("Please select a date.");
        }
        else if (!formData.time) {
            alert("Please select a time.");
        }
        else if (!formData.name) {
            alert("Please enter your name.");
        }
        else if (!formData.phone) {
            alert("Please enter your phone number.");
        }
        else if (!formData.guests) {
            alert("Please select the number of guests.");
        }
    };

    return <>
        <Nav />
        <div className="booking-info">
            <div>
                <h2>Book a Table</h2>
                <p>Monday to Friday: 10:00 AM - 10:00 PM</p>
            </div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="date">SELECT A DATE</label>
                <Calendar />
                <br />

                <label htmlFor="date">SELECT A TIME</label>
                <input className="input" value={formData.time} onChange={handleChange} step="900" min="10:00" max="22:00" type="time" id="time" name="time" placeholder='TIME' required />
                <br />

                <label htmlFor="name">NAME</label>
                <input className='input' value={formData.name} onChange={handleChange} type="text" id="name" name="name" required />
                <br />

                <label htmlFor="phone">PHONE NUMBER</label>
                <input className="input" type="number " id="phone" name="phone" required />
                <br />

                <label htmlFor="guests">NUMBER OF GUESTS</label>
                <Counter count={guests} setCount={setGuests} />
                <br />

                <input className="button" type="submit" value="Reserve" />
            </form>
        </div>
        <Footer />
    </>
}

export default Booking;
