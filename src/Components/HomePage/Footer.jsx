import React from 'react'
import './Footer.css'
import { Link } from 'react-router'
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import { IoIosSend } from "react-icons/io";



const Footer = () => {
  return (
    <>
    <section className='footer'>
        <div className="container">
            <div className="footer_row">
                <div className="footer_row1">
                    <div className="footer_row1_col1">
                        <img src="images/Logo.png" alt="logo" />
                        <p>Build a modern and creative website with Innovate.</p>
                        <div className="footer_icon">
                            <Link to="#"> <FaGoogle /></Link>
                            <Link to="#"> <FaTwitter /></Link>
                            <Link to="#"> <AiFillInstagram /></Link>
                            <Link to="#"> <IoLogoLinkedin /></Link>
                        </div>
                    </div>
                    <div className="footer_row1_col2">
                      <div className="footer_row1_col2_pages">
                        <h4>Product</h4>
                        <Link to="#"><p>Landingpages</p></Link>
                        <Link to="#"> <p>Pricing</p></Link>
                        <Link to="#"><p>Features</p></Link>
                        <Link to="#"><p>Benefits</p></Link>
                      </div>
                      <div className="footer_row1_col2_pages">
                        <h4>Company</h4>
                        <Link to="#"><p>About</p></Link>
                        <Link to="#"> <p>Privacy Policy</p></Link>
                        <Link to="#"><p>Terms & Conditions</p></Link>
                        <Link to="#"><p>Partners</p></Link>
                        <Link to="#"><p>Contact</p></Link>
                      </div>
                      <div className="footer_row1_col2_pages">
                        <h4>Resources</h4>
                        <Link to="#"><p>Guides and resources</p></Link>
                        <Link to="#"> <p>Blog</p></Link>
                        <Link to="#"><p>Tools</p></Link>
                        <Link to="#"><p>Support</p></Link>
                      </div>
                      <div className="footer_row1_col2_pages">
                        <h4>Get Latest Updates</h4>
                        <p className='p'>Subscribe to our newsletter and get many interesting things every week</p>
                        <div className="input_value">
                            <input type="text" />
                            <Link to="#" type='submit'><IoIosSend /></Link>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="footer_row2">
                    <hr />
                    <p>© 2020 Innovate - All Right Reserved</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Footer