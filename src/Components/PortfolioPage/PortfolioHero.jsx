import React from 'react'
import './PortfolioHero.css'
import services from '../../assets/servicesHero.png'

const PortfolioHero = () => {
  return (
    <>
     <section className='portfoliohero' style={{backgroundImage:`url(${services})`}}>
            <div className="container">
                <div className="Portfolio_hero_row">
                    <h1>Have a look on Our projects</h1>
                    <p> A quick view of industry specific problems solved with design by the awesome team at Abstrak.</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default PortfolioHero