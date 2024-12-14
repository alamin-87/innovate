import React, { useState } from 'react'
import './Navicon.css'
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';

const Navicon = () => {
    const [show , setshow] = useState(false)
  return (
    <>
    <section className='nav_icon'>
    <IoIosArrowDown onClick={()=>setshow(!show)} />
    {
          show&&
              <div className="nav_icon_main">
              <div className="nav_icon_pages">
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">About Us</Link></li>
                    <li><Link to="/">Latest News</Link></li>
                    <li><Link to="/">Contact</Link></li>
                    <li><Link to="/">Activities</Link></li>
                  </ul>
                </div>
                <div className="nav_icon_button">
                  <button>Get Started </button>
                </div>
              </div>
        }
    </section>
    </>
  )
}

export default Navicon