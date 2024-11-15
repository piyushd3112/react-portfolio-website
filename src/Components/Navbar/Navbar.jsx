import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
         <p className='logo'>PIYUSH</p>
        <ul className="nav-menu">
            <li>Home</li>
            <li>About Me</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
        <div className="nav-connect">
            Connect With Me
        </div>
    </div>
  )
}

export default Navbar