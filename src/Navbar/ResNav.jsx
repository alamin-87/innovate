import React, { useState } from 'react'
import './ResNav.css'
import { MdViewSidebar } from "react-icons/md";
import { Link } from 'react-router-dom';

const ResNav = () => {
    const [show , setshow] = useState(false)
  return (
    <>
    <section  className='resnav'>
      <MdViewSidebar className=' res_icon' onClick={()=>setshow(!show)} />
        {
          show&&
              <div className="res_nav">
              <div className="resnav_pages">
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">About Us</Link></li>
                    <li><Link to="/">Latest News</Link></li>
                    <li><Link to="/">Contact</Link></li>
                    <li><Link to="/">Activities</Link></li>
                  </ul>
                </div>
                <div className="resnav_button">
                  <button>Get Started </button>
                </div>
              </div>
        }

    </section>
    </>
  )
}

export default ResNav