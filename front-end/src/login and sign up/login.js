import React, { useState } from 'react';
import './login.css'; // Import your CSS file here

function VaccinationRecordSystem() {
  const [showForm, setShowForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const handleFormOpen = () => {
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
  };

  const handleSignupClick = () => {
    setShowSignupForm(true); // Fixed: Set showSignupForm to true
    setShowLoginForm(false);
  };

  const handleLoginClick = () => {
    setShowLoginForm(true);
    setShowSignupForm(false);
  };

  return (
    <div>
      <header className="header">
        <nav className="nav">
          <a href="#" className="nav_logo">
            Vaccination record System
          </a>
          <ul className="nav_items nav_item">
            <li className="nav_item">
              <a href="#" className="nav_link">
                Home
              </a>
              <a href="#" className="nav_link">
                Services
              </a>
              <a href="#" className="nav_link">
                Contact Us
              </a>
            </li>
          </ul>
          <button className="button" onClick={handleFormOpen}>
            Login
          </button>
        </nav>
      </header>
      <section className={`home ${showForm ? 'show' : ''}`}>
        <div className="form_container">
          <i className="uil uil-times form_close" onClick={handleFormClose}></i>
          {showLoginForm && (
            <div className="form login_form">
              <form action="#">
                <h2>Login</h2>
                <div className="input_box">
                  <input type="email" placeholder="Enter your email" required />
                  <i className="uil uil-envelope-alt email"></i>
                </div>
                <div className="input_box">
                  <input
                    type={passwordVisibility ? 'text' : 'password'}
                    placeholder="Enter your password"
                    required
                  />
                  <i className="uil uil-lock password"></i>
                  <i
                    className={`uil ${
                      passwordVisibility ? 'uil-eye' : 'uil-eye-slash'
                    } pw_hide`}
                    onClick={togglePasswordVisibility}
                  ></i>
                </div>
                <div className="option_field">
                  <span className="checkbox">
                    <input type="checkbox" id="check" />
                    <label htmlFor="check">Remember me</label>
                  </span>
                  <a href="#" className="forgot_pw">
                    Forgot password?
                  </a>
                </div>
                <button className="button">Login Now</button>
                <div className="login_signup">
                  Don't have an account?{' '}
                  <a href="#" id="signup" onClick={handleSignupClick}>
                    Signup
                  </a>
                </div>
              </form>
            </div>
          )}
          {showSignupForm && (
            <div className="form signup_form">
              <form action="#">
                <h2>Signup</h2>
                <div className="input_box">
                  <input type="email" placeholder="Enter your email" required />
                  <i className="uil uil-envelope-alt email"></i>
                </div>
                <div className="input_box">
                  <input
                    type={passwordVisibility ? 'text' : 'password'}
                    placeholder="Create password"
                    required
                  />
                  <i className="uil uil-lock password"></i>
                  <i
                    className={`uil ${
                      passwordVisibility ? 'uil-eye' : 'uil-eye-slash'
                    } pw_hide`}
                    onClick={togglePasswordVisibility}
                  ></i>
                </div>
                <div className="input_box">
                  <input
                    type={passwordVisibility ? 'text' : 'password'}
                    placeholder="Confirm password"
                    required
                  />
                  <i className="uil uil-lock password"></i>
                  <i
                    className={`uil ${
                      passwordVisibility ? 'uil-eye' : 'uil-eye-slash'
                    } pw_hide`}
                    onClick={togglePasswordVisibility}
                  ></i>
                </div>
                <button className="button">Signup Now</button>
                <div className="login_signup">
                  Already have an account?{' '}
                  <a href="#" id="login" onClick={handleLoginClick}>
                    Login
                  </a>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default VaccinationRecordSystem;
