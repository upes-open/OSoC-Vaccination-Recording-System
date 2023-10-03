// import logo from './logo.svg';
// import './App.css';
import "./App.css";
import React from "react";
import Dashboard from "./Dashboard/Dashboard";
import Navbar from "./Navbar/Navbar";
import VaccinesRecord from "./getVaccinationRecord/getRecord";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AppointmentForm from "./Remainder/Remainder";
import VaccinationRecordSystem from "./login and sign up/login";
function App() {
  return (
    <div>
      <Navbar />

      <BrowserRouter>
        <Routes>
        <Route path="/login" element={<VaccinationRecordSystem />}></Route>
          <Route path="/landing" element={<Dashboard />}></Route>
          <Route path="/appointment" element={<AppointmentForm />}></Route>
          <Route path="/allvaccine" element={<VaccinesRecord />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
