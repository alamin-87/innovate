import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";
import Navicon from './Navicon';
import ResNav from './ResNav';

const Navbar = () => {
    const [show , setshow] = useState(false)
  return (
    <>     
   <nav className='navbar'>
    <div className="container">
    <div className="nav_row">
            <div className="nav_logo">
              {/* <Link to="/"><img src="images/logo.png" alt="logo" /></Link> */}
            </div>
           <div className="nav_main">
           <div className="nav_content">
                <div className="nav_pages">
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">About Us <Navicon/></Link></li>
                    {/* ==========2nd li start================ */}
                    <li><Link to="/">Latest News </Link>
                     <div className="two_navicon">
                     <IoIosArrowDown className=' hover:text-[#FF9600] text-white mt-[6px] ml-[8px]' onClick={()=>setshow(!show)}  />
                      {
                        show&&
                        <div className="two_navicon_main">
                         <div className=" two_navicon_text">
                        <ul>
                         <li><Link to="/">Home</Link></li>
                         <li><Link to="/">About Us</Link></li>
                         <li><Link to="/">Latest News</Link></li>
                         <li><Link to="/">Contact</Link></li>
                         <li><Link to="/">Activities</Link></li>
                           </ul>
                       </div>
                      <div className="two_nav_button">
                      <button>Get Started </button>
                      </div>
                      </div>
                      }
                     </div>
                    </li>
                    {/* =============== 2nd li last ================== */}
                    <li><Link to="/">Contact</Link></li>
                    <li><Link to="/">Activities</Link></li>
                  </ul>
                </div>
                <div className="nav_button">
                  <button>Get Started </button>
                </div>
            </div>
           </div>
            <ResNav/>
           </div>
    </div>
   </nav>
    </>
  )
}

export default Navbar