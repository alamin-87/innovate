import React from 'react'
import './Customer.css'
import { FaStar } from "react-icons/fa";


const Customer = () => {
  return (
    <>
    <section className='customer_section'>
        <div className="container">
            <div className="customer_row">
                <div className="customer_row1">
                    <h3>What our customers are saying about us</h3>
                </div>
                <div className="customer_row2">
                    <div className="customer_card">
                        <div className="customer_card_text">
                         <p>“Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes
                          to online trading. So impressed by the knowledge, and sincerity. Thank you Mrs victoria for your
                          amazing company.</p>
                        </div>
                        <div className="customer_card_profile">
                            <div className="profile_img">
                                <img src="images/me.jpg" alt="me" />
                            </div>
                            <div className="profile_text">
                                <h5>Jenny Wilson</h5>
                                <p>Digital Marketer</p>
                            </div>
                            <div className="profile_review">
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                            </div>
                        </div>
                    </div>
                    <div className="customer_img">
                        <img src="images/customer.png" alt="customer" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Customer