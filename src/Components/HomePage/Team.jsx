import React, { useState } from 'react'
import './Team.css'
import team from '../../assets/team.png'
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router';
import { FaTwitterSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa";




const Team = () => {
    const [show , setshow] =useState(false)
    // const handelshow=()=>{
    //     if(!show){
    //     }
    //   }
  return (
    <>
    <section className='team_section' style={{backgroundImage:`url(${team})`}}>
        <div className="container">
           <div className="team_row">
            <div className="team_row1">
                <h5>our team</h5>
                <h3>Meet with Expert</h3>
            </div>
            <div className="team_row2">
                <div className="row2_single_card">
                    <div className="card_text">
                        <span></span>
                        <div className="text1">
                            <h5>Eleanor Pena</h5>
                            <p>Senior Engineer</p>
                        </div>
                    </div>
                    <div className="card_list">
                        <FaStar className='icon' onClick={()=>setshow(!show)} />
                    {
                        show&&
                        <div className="link_icon">
                         <Link to="/"><FaLinkedin /></Link>
                         <Link to="/"><FaTwitterSquare /></Link>
                         <Link to="/"><RiInstagramFill /></Link>
                         </div>
                    }
                    </div>
                </div>
                <div className="row2_single_card">
                    <div className="card_text">
                        <span></span>
                        <div className="text1">
                            <h5>Eleanor Pena</h5>
                            <p>Senior Engineer</p>
                        </div>
                    </div>
                    <div className="card_list">
                        <FaStar className='icon' onClick={()=>setshow(!show)} />
                    {
                        show&&
                        <div className="link_icon">
                         <Link to="/"><FaLinkedin /></Link>
                         <Link to="/"><FaTwitterSquare /></Link>
                         <Link to="/"><RiInstagramFill /></Link>
                         </div>
                    }
                    </div>
                </div>
                <div className="row2_single_card">
                    <div className="card_text">
                        <span></span>
                        <div className="text1">
                            <h5>Eleanor Pena</h5>
                            <p>Senior Engineer</p>
                        </div>
                    </div>
                    <div className="card_list">
                        <FaStar className='icon' onClick={()=>setshow(!show)} />
                    {
                        show&&
                        <div className="link_icon">
                         <Link to="/"><FaLinkedin /></Link>
                         <Link to="/"><FaTwitterSquare /></Link>
                         <Link to="/"><RiInstagramFill /></Link>
                         </div>
                    }
                    </div>
                </div>
                <div className="row2_single_card">
                    <div className="card_text">
                        <span></span>
                        <div className="text1">
                            <h5>Eleanor Pena</h5>
                            <p>Senior Engineer</p>
                        </div>
                    </div>
                    <div className="card_list">
                        <FaStar className='icon' onClick={()=>setshow(!show)} />
                    {
                        show&&
                        <div className="link_icon">
                         <Link to="/"><FaLinkedin /></Link>
                         <Link to="/"><FaTwitterSquare /></Link>
                         <Link to="/"><RiInstagramFill /></Link>
                         </div>
                    }
                    </div>
                </div>
            </div>
           </div>
        </div>
    </section>
    </>
  )
}

export default Team