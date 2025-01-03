import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <>
    <section className='services_section'>
        <div className="container">
           <div className="services_row">
             <div className="services_row1">
                <div className="row1_col1">
                    <h5>Services</h5>
                    <h2>Find the service we provide</h2>
                </div>
                <div className="row1_col2">
                    <p>Our consultants have years of experience on the  in success. Through the provision of our services.</p>
                </div>
             </div>
             <div className="services_row2">
                <div className="row2_card">
                    <img src="images/card1.png" alt="card1" />
                    <h4>Grow Your Brand And Business</h4>
                    <p>That community can of course lend to sales - that's how brand and business go hand-in-hand</p>
                </div>
                <div className="row2_card">
                    <img src="images/card2.png" alt="card1" />
                    <h4>Increase Your Conversion Rate</h4>
                    <p>There are two ways to increase your conversion rate: increase their motivation and make it easier</p>
                </div>
                <div className="row2_card">
                    <img src="images/card3.png" alt="card1" />
                    <h4>Business Plan Consulting</h4>
                    <p>A business plan consultant provides strategic direction by creating or methodically pressure-testing </p>
                </div>
                <div className="row2_card">
                    <img src="images/card4.png" alt="card1" />
                    <h4>Business Startup Analysis</h4>
                    <p>You must do different kinds of research for your startup. However, before you make any new decision</p>
                </div>
             </div>
           </div>
        </div>
    </section>
    </>
  )
}

export default Services