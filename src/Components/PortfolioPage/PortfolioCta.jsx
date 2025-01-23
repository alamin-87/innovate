import React from 'react'
import './PortfolioCta.css'
import cta from '../../assets/cta.png'

const PortfolioCta = () => {
  return (
    <>
     <section className='portfolio_cta' style={{backgroundImage:`url(${cta})`}}>
            <div className="container">
                <div className="portfolio_cta_row">
                    <div className="portfolio_cta_row1">
                        <div className="portfolio_cta_row1_text">
                            <p>Lets talk</p>
                            <h3>Got a project?</h3>
                        </div>
                        <div className="portfolio_cta_row1_button">
                            <button>Contact us</button>
                        </div>
                    </div>
                    <div className="portfolio_cta_row2">
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

export default PortfolioCta