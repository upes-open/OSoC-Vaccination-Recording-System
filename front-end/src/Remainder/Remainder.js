import React, { useState } from "react";
import axios from "axios";
import "../index.css";
const AppointmentForm = () => {
  const [appointment, setAppointment] = useState({
    date: "",
    time: "", // Added time field
    description: "",
    name: "",
    dob: "",
    contact: "",
    preferredMethod: "Email",
    vaccinationType: "",
  });

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
      .post(`http://localhost:5000/appointment`, appointment)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointment({ ...appointment, [name]: value });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="p-4 max-w-sm bg-green-400 shadow-md rounded-lg"
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Name:</label>
          <input
            type="text"
            name="name"
            value={appointment.name}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={appointment.dob}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Contact:</label>
          <input
            type="text"
            name="contact"
            value={appointment.contact}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Preferred Method of Communication:</label>
          <select
            name="preferredMethod"
            value={appointment.preferredMethod}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="Email">Email</option>
            <option value="SMS">SMS</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Vaccination Type:</label>
          <input
            type="text"
            name="vaccinationType"
            value={appointment.vaccinationType}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Vaccination Date:</label>
          <input
            type="date"
            name="date"
            value={appointment.date}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Vaccination Time:</label>
          <input
            type="time"
            name="time"
            value={appointment.time}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Additional Notes/Comments:</label>
          <textarea
            name="description"
            value={appointment.description}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
            rows="3"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Appointment
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
