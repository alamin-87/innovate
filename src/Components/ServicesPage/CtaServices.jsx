import React from 'react'
import './CtaServices.css'
import cta from '../../assets/cta.png'

const CtaServices = () => {
  return (
    <>
    <section className='CtaServices' style={{backgroundImage:`url(${cta})`}}>
        <div className="container">
            <div className="CtaServices_row">
                <div className="CtaServices_row1">
                    <div className="CtaServices_row1_text">
                        <p>Lets talk</p>
                        <h3>Got a project?</h3>
                    </div>
                    <div className="CtaServices_row1_button">
                        <button>Contact us</button>
                    </div>
                </div>
                <div className="CtaServices_row2">
                    <span></span>
                    <p>As a leading digital platform in Paris, we look to engage with our clients beyond the conventional design and
                     development agency relationship, becoming a partner to the people and companies we work with.</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default CtaServices