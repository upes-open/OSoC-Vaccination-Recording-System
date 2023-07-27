import React from 'react'

import './Navbar.css'

function Navbar() {
  return (
    <div className='bdy'>
       <div className='nav'>
            <div className='logo'>
                <h1>Logo</h1>
            </div>
            <div className='links'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Support</li>
                    <li>Logout</li>
                </ul>
            </div>
       </div>
    </div>
  )
}

export default Navbar