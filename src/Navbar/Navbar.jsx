import React, { useState } from 'react'
import './Navbar.css'
import { IoIosArrowDown } from 'react-icons/io'
import { Link } from 'react-router'
import Navicon from './Navicon'
import ResNav from './ResNav'


const Navbar = () => {
    const [show , setshow] = useState(false)
  return (
    <>     
     <nav className='navbar'>
       <div className="container">
         <div className="nav_row">
          <div className="nav_col1">
           <Link to="/"> <img src="images/Logo.png" alt="logo" /> </Link>
          </div>
          <div className="nav_element">
          <div className="nav_content">
          <div className="nav_col2">
            <ul>
              <li>
                <Link to="/">Home</Link>
                <Navicon/>
              </li>
              <li><Link to="/about">About</Link></li>
              <li>
               <Link to="/services">Services</Link>
               <Navicon/>
              </li>
              <li>
               <Link to="/portfolio">Portfolio</Link>
               <Navicon/>
              </li>
              <li><Link to="/">Blog</Link></li>
            </ul>
          </div>
          <div className="nav_col3">
            <Link to="/login">Login</Link>
            <button>Free Consultation</button>
          </div>
          </div>
          </div>
          <div className="resnav">
          <ResNav/>
          </div>
         </div>
       </div>
     </nav>
    </>
  )
}

export default Navbar