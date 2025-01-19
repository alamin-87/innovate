import React, { useState } from 'react'
import './Navicon.css'
import { Link } from 'react-scroll'
import { IoIosArrowDown } from 'react-icons/io'

const Navicon = () => {
  const [show , setshow] =useState(false)
  return (
    <>
    <section>
    <div>
                <IoIosArrowDown className='icon text-white' onClick={()=>setshow(!show)}/>
                {
                  show&&
                  <div className="navicon">
                 <ul>
                  <li><Link to="/" spy={true} smooth={true} offset={50} duration={500}>Content</Link></li>
                  <li><Link to="about_section" spy={true} smooth={true} offset={50} duration={500}>About</Link></li>
                  <li><Link to="services_section" spy={true} smooth={true} offset={50} duration={500}>Services</Link></li>
                  <li><Link to="solution_section" spy={true} smooth={true} offset={50} duration={500}>Solution</Link></li>
                  <li><Link to="team_section" spy={true} smooth={true} offset={50} duration={500}>Team</Link></li>
                  <li><Link to="invest_section" spy={true} smooth={true} offset={50} duration={500}>Invest</Link></li>
                  <li><Link to="footer" spy={true} smooth={true} offset={50} duration={500}>Footer</Link></li>
                 </ul>
                  </div>
                }
       </div>
    </section>
    </>
  )
}

export default Navicon