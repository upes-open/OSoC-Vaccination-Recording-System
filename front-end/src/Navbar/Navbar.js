import React from 'react'
import logo from '../logo_asset/logo.png'
import './Navbar.css'

function Navbar() {
  return (
		<div className='bdy'>
			<div className='nav'>
				<div className='logo'>
          <img src={logo} className='logo-img' alt = "Logo of Open Vaccinfo"></img>
          <h5 className='heading'> OPEN - VACCINFO</h5>
				</div>
				<div className='links'>
					<a href = "/">Home</a>
					<a href = "/">About</a>
					<a href = "/">Support</a>
					<button>Logout</button>
				</div>
			</div>
		</div>
	);
}

export default Navbar