// src/components/BookingForm.js
import React from 'react';
import { Link } from 'react-router-dom';

function BookingForm() {
  return (
    <div className="booking-form">
      <h1>Booking Form</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Guests:
          <input type="number" name="guests" />
        </label>
        <button type="submit">Confirm Booking</button>
      </form>
      <Link to="/confirmation">Proceed to Confirmation</Link>
    </div>
  );
}

export default BookingForm;
