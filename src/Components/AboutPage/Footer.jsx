import React from 'react'
import './Footer.css'
import { Link } from 'react-scroll'
import { IoIosSend } from "react-icons/io";

const Footer = () => {
  return (
    <>
       <section className='about_footer'>
        <div className="container">
            <div className="about_footer_row">
                <div className="about_footer_row1">
                    <div className="about_footer_row1_col1">
                        <img src="images/Logo.png" alt="logo" />
                        <p>Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.</p>
                    </div>
                    <div className="about_footer_row1_col2">
                      <div className="about_footer_row1_col2_pages">
                        <h4>Features</h4>
                        <Link to="#"><p>Home</p></Link>
                        <Link to="#"> <p>About</p></Link>
                        <Link to="#"><p>Benifit</p></Link>
                        <Link to="#"><p>Pricing</p></Link>
                        <Link to="#"><p>Blog</p></Link>
                      </div>
                      <div className="about_footer_row1_col2_pages">
                        <h4>Products</h4>
                        <Link to="#"><p>Task Management</p></Link>
                        <Link to="#"> <p>Company growth</p></Link>
                        <Link to="#"><p>Time tracking</p></Link>
                      </div>
                      <div className="about_footer_row1_col2_pages">
                        <h4>Support</h4>
                        <Link to="#"><p>Customer service</p></Link>
                        <Link to="#"> <p>Accessibility</p></Link>
                        <Link to="#"><p>Contact us</p></Link>
                      </div>
                    </div>
                </div>
                <div className="about_footer_row2">
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