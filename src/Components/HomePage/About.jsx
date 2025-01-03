import React from 'react'
import './About.css'
import { FaCheckCircle } from "react-icons/fa";


const About = () => {
  return (
    <>
    <section className='about_section'>
        <div className="container">
            <div className="about_row">
                <div className="about_col1">
                    <img src="images/about.png" alt="about" />
                </div>
                <div className="about_col2">
                    <div className="col2_text">
                        <h5>ABOUT US</h5>
                        <h2>Welcome to World Best Business Company</h2>
                        <p>We partner with experienced and qualified Accountants, Financial Advisors and Chartered Secretaries to provide</p>
                    </div>
                    <div className="col2_list">
                        <div className="list1">
                          <FaCheckCircle />
                          <p>Monthly assesment report</p>
                        </div>
                        <div className="list1">
                          <FaCheckCircle />
                          <p>Monthly assesment report</p>
                        </div>
                        <div className="list1">
                          <FaCheckCircle />
                          <p>Monthly assesment report</p>
                        </div>
                    </div>
                    <div className="col2_button">
                        <button>Free Consultation</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default About