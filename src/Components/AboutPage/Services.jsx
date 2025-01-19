import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <>
    <section className='services'>
         <div className="container">
            <div className="services_row">
                <div className="services_row1">
                    <h3>What We Do?</h3>
                </div>
                <div className="services_row2">
                    <div className="services_row2_card">
                        <img src="images/services1.png" alt="services" />
                        <h4>Digital products </h4>
                        <p>By applying behavioral science to customer experience, we design engaging digital products used by millions of people.</p>
                    </div>
                    <div className="services_row2_card">
                        <img src="images/services1.png" alt="services" />
                        <h4>Digital products </h4>
                        <p>By applying behavioral science to customer experience, we design engaging digital products used by millions of people.</p>
                    </div>
                    <div className="services_row2_card">
                        <img src="images/services1.png" alt="services" />
                        <h4>Digital products </h4>
                        <p>By applying behavioral science to customer experience, we design engaging digital products used by millions of people.</p>
                    </div>
                </div>
            </div>
         </div>
    </section>
    </>
  )
}

export default Services