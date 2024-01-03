import React from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'


const Navbar = () => {
  return (
    <div className="nav-container">
      <nav className='navbar'>
        <h6 className='logo'>BT</h6>
        <div className='nav-links-section'>
            <Link className='nav-link'>Home</Link>
            <Link className='nav-link'>About</Link>
            <Link className='nav-link'>Portfolio</Link>
            <Link className='nav-link'>Features</Link>
        </div>
        <button className='navBtn'>Contact me</button>
      </nav>
    </div>
  )
}

export default Navbar
