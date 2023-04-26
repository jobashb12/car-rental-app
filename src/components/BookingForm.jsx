import React from "react";
import "../styles/BookingForm.css";

const BookingForm = () => {
    return (
        <div className="booking-form">
            <h1>Booking Information</h1>
            <form>
                <input
                    className="form-control"
                    type="text"
                    placeholder="First Name"
                />
                <input
                    className="form-control"
                    type="text"
                    placeholder="Last Name"
                />
                <input
                    className="form-control"
                    type="email"
                    placeholder="Email"
                />
                <input
                    className="form-control"
                    type="number"
                    placeholder="Phone Number"
                />
                <input
                    className="form-control"
                    type="text"
                    placeholder="From Address"
                />
                <input
                    className="form-control"
                    type="text"
                    placeholder="To Address"
                />
                <select className="form-control">
                    <option>1 Person</option>
                    <option>2 Person</option>
                    <option>3 Person</option>
                    <option>4 Person</option>
                    <option>5+ Person</option>
                </select>
                <select className="form-control">
                    <option>1 Luggage</option>
                    <option>2 Luggage</option>
                    <option>3 Luggage</option>
                    <option>4 Luggage</option>
                    <option>5+ Luggage</option>
                </select>
                <input className="form-control" type="date" />
                <input className="form-control" type="time" />
                <textarea placeholder="Write"></textarea>
            </form>
        </div>
    );
};

export default BookingForm;
