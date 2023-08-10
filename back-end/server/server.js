const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const moment = require("moment");
const cors = require("cors");
const app = express();
const PORT = 5000;
require("dotenv").config({ path: "../.env.local" });

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Dummy database to store appointments (replace this with a real database)
const appointments = [];
console.log(process.env.PASSWORD);
console.log(process.env.USER);

// Schedule the reminder email to be sent before the appointment date
function scheduleReminderEmail(name,vaccinationType,date, time, description) {
  // Replace the transporter options with your email credentials
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD,
    },
  });
  console.log(name,vaccinationType,date, time, description)

  // Calculate the date and time for the reminder email (e.g., 24 hours before the appointment)
  const appointmentDateTime = moment(`${date} ${time}`, "YYYY-MM-DD HH:mm");
  const reminderDateTime = appointmentDateTime.subtract(24, "hours");
  const currentTime = moment();

  // Calculate the time remaining until the reminderDateTime
  const timeRemaining = reminderDateTime.diff(currentTime);

  // Schedule the email to be sent at the reminderDateTime
  setTimeout(() => {
    // Replace recipient with the user's email who scheduled the appointment
    const mailOptions = {
      from: process.env.USER,
      to: "gagancopvtlimited@gmail.com",
      subject: "Vaccination Reminder",
      text: `Hi ${name}, You have an vaccine { ${vaccinationType} } due on ${date} at ${time}. Description: ${description}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error sending email:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });
  }, timeRemaining);
}

// API endpoint to create a new appointment
app.post("/appointment", (req, res) => {
  const { name,vaccinationType,date, time, description } = req.body;
  const newAppointment = { name,vaccinationType,date, time, description };
  appointments.push(newAppointment);

  // Schedule the reminder email
  scheduleReminderEmail(name,vaccinationType,date, time, description);

  res.status(201).json({ message: "Appointment created successfully!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
