import React, { useState } from 'react'
import './ResNav.css'
import { FiSidebar } from "react-icons/fi";
import Navicon from './Navicon';
import { Link } from 'react-router';


const ResNav = () => {
    const [show , setshow] = useState(false)
  return (
    <>
    <section className='resnav_part'>
      <div className="container">
      <FiSidebar className='text-white text-2xl right-0'  onClick={()=>setshow(!show)}/>
        {
          show&&
          <div className="resnav">
            <div className='resnav_content'>
            <div className="resnav_col2">
            <ul>
              <li>
                <Link to="/">Home</Link>
                <Navicon/>
              </li>
              <li><Link to="/">About</Link></li>
              <li>
               <Link to="/">Services</Link>
               <Navicon/>
              </li>
              <li>
               <Link to="/">Pages</Link>
               <Navicon/>
              </li>
              <li><Link to="/">About</Link></li>
            </ul>
           </div>
           <div className="resnav_col3">
            <Link to="/login">Login</Link>
            <button>Free Consultation</button>
           </div>
            </div>
         </div>
        }
      </div>
    </section>
    </>
  )
}

export default ResNav