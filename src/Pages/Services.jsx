import React from 'react'
import Hero from '../Components/ServicesPage/Hero'
import Process from '../Components/ServicesPage/Process'
import About from '../Components/ServicesPage/About'
import AgencyServices from '../Components/ServicesPage/AgencyServices'
import Success from '../Components/AboutPage/Success'
import PricingServices from '../Components/ServicesPage/PricingServices'
import CtaServices from '../Components/ServicesPage/CtaServices'
import FooterServices from '../Components/ServicesPage/FooterServices'

const Services = () => {
  return (
    <>
    <Hero/>
    <Process/>
    <About/>
    <AgencyServices/>
    <Success/>
    <PricingServices/>
    <CtaServices/>
    <FooterServices/>
    </>
  )
}

export default Services