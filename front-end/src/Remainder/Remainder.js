import React, { useState } from "react";
import axios from "axios";
import "../index.css"; // Make sure to import your global CSS here

const AppointmentForm = () => {
  const [appointment, setAppointment] = useState({
    date: "",
    time: "",
    description: "",
    name: "",
    dob: "",
    contact: "",
    preferredMethod: "Email",
    vaccinationType: "",
  });
  console.log(appointment)
  const port = process.env.REACT_APP_API_PORT || 3001;

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic form validation
    if (!appointment.date || !appointment.time || !appointment.description) {
      alert("Please fill in all required fields.");
      return;
    }

    console.log(appointment);

    // Send the appointment data to the server
    axios
      .post(`http://localhost:${port}/appointment`, appointment)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointment({ ...appointment, [name]: value });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="appointment-form">
        <div className="form-field">
          <label className="label">Name:</label>
          <input
            type="text"
            name="name"
            value={appointment.name}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="form-field">
          <label className="label">Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={appointment.dob}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="form-field">
          <label className="label">Contact:</label>
          <input
            type="text"
            name="contact"
            value={appointment.contact}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="form-field">
          <label className="label">Preferred Method of Communication:</label>
          <select
            name="preferredMethod"
            value={appointment.preferredMethod}
            onChange={handleChange}
            className="input"
          >
            <option value="Email">Email</option>
            <option value="SMS">SMS</option>
          </select>
        </div>
        <div className="form-field">
          <label className="label">Vaccination Type:</label>
          <input
            type="text"
            name="vaccinationType"
            value={appointment.vaccinationType}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="form-field">
          <label className="label">Vaccination Date:</label>
          <input
            type="date"
            name="date"
            value={appointment.date}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="form-field">
          <label className="label">Vaccination Time:</label>
          <input
            type="time"
            name="time"
            value={appointment.time}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="form-field">
          <label className="label">Additional Notes/Comments:</label>
          <textarea
            name="description"
            value={appointment.description}
            onChange={handleChange}
            className="input"
            rows="3"
          />
        </div>
        <button type="submit" className="submit-button">
          Add Appointment
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
