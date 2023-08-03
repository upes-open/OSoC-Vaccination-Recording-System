// backend/app.js
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const moment = require("moment");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Dummy database to store appointments (replace this with a real database)
const appointments = [];

// Schedule the reminder email to be sent before the appointment date
function scheduleReminderEmail(date, time, description) {
  // Replace the transporter options with your email credentials
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "gss12111408@gmail.com",
      pass:  process.env.PASSWORD,
    },
  });

  // Calculate the date and time for the reminder email (e.g., 24 hours before the appointment)
  const appointmentDateTime = moment(`${date} ${time}`, "YYYY-MM-DD HH:mm");
  const reminderDateTime = appointmentDateTime.subtract(24, "hours");

  // Replace recipient with the user's email who scheduled the appointment
  const mailOptions = {
    from: "gss12111408@gmail.com",
    to: "gopal7020.gs@gmail.com",
    subject: "Appointment Reminder",
    text: `You have an appointment on ${date} at ${time}. Description: ${description}`,
  };

  // Schedule the email to be sent at the reminderDateTime
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
}

// API endpoint to create a new appointment
app.post("/api/appointments", (req, res) => {
  const { date, time, description } = req.body;
  const newAppointment = { date, time, description };
  appointments.push(newAppointment);

  // Schedule the reminder email
  scheduleReminderEmail(date, time, description);

  res.status(201).json({ message: "Appointment created successfully!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
