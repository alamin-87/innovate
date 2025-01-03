import React, { useState } from 'react'
import './Navicon.css'
import { Link } from 'react-router'
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
                  <li><Link to="/">Content</Link></li>
                  <li><Link to="/">About</Link></li>
                  <li><Link to="/">Services</Link></li>
                  <li><Link to="/">Solution</Link></li>
                  <li><Link to="/">Team</Link></li>
                  <li><Link to="/">Invest</Link></li>
                  <li><Link to="/">Footer</Link></li>
                 </ul>
                  </div>
                }
       </div>
    </section>
    </>
  )
}

export default Navicon