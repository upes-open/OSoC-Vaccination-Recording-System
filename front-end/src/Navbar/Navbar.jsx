import React from "react";
import logo from "../logo_asset/logo.png";
import "./Navbar.css";

function Navbar() {
	return (
		<div className='bdy'>
			<div className='nav'>
				<div className='logo'>
					<img
						src={logo}
						className='logo-img'
						alt='Logo of Open Vaccinfo'
					></img>
					<h5 className='heading'> OPEN - VACCINFO</h5>
				</div>
				<div className='links'>
					<a href='/' className="anchor-nav">Home</a>
					<a href='/' className="anchor-nav">About</a>
					<a href='/' className="anchor-nav">Support</a>
					<button className="logout-btn">Logout</button>
					<h5 className='username'>
						{" "}
						Hello,<span className='username-span'>Username</span>
					</h5>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
