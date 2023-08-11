// import logo from './logo.svg';
// import './App.css';
import "./App.css";
import React from "react";
import Dashboard from "./Dashboard/Dashboard";
import Navbar from "./Navbar/Navbar";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AppointmentForm from "./Remainder/Remainder";
function App() {
  return (
    <div>
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/landing" element={<Dashboard />}></Route>
          <Route path="/appointment" element={<AppointmentForm />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
