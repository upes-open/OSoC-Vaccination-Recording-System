import React, { useState } from "react";
import axios from "axios";

const AppointmentForm = () => {
  const [appointment, setAppointment] = useState({
    date: "",
    time: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/front-end/src/api/appointments", appointment);
      console.log(response.data);
      setAppointment({
        date: "",
        time: "",
        description: "",
      });
    } catch (error) {
      console.error("Error creating appointment:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointment({ ...appointment, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-sm mt-8 bg-white shadow-md rounded-lg">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Date:</label>
        <input
          type="date"
          name="date"
          value={appointment.date}
          onChange={handleChange}
          className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Time:</label>
        <input
          type="time"
          name="time"
          value={appointment.time}
          onChange={handleChange}
          className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Description:</label>
        <input
          type="text"
          name="description"
          value={appointment.description}
          onChange={handleChange}
          className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Add Appointment
      </button>
    </form>
  );
};

export default AppointmentForm;
