import React from 'react'
import './Hero.css'
import services from '../../assets/servicesHero.png'

const Hero = () => {
  return (
    <>
    <section className='hero' style={{backgroundImage:`url(${services})`}}>
        <div className="container">
            <div className="hero_row">
                <h1>What service we provide</h1>
                <p>With over 25 years of experience, we have crafted thousands of strategic discovery process that enables us to peel back the layers which enable us to understand, connect, represent and dominate your market.</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default Hero