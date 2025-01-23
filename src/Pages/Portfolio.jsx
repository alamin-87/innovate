import React from 'react'
import PortfolioHero from '../Components/PortfolioPage/PortfolioHero'
import PortfolioSection from '../Components/PortfolioPage/PortfolioSection'
import CtaServices from '../Components/ServicesPage/CtaServices'
import PortfolioCta from '../Components/PortfolioPage/PortfolioCta'
import FooterServices from '../Components/ServicesPage/FooterServices'

const Portfolio = () => {
  return (
    <>
    <PortfolioHero/>
    <PortfolioSection/>
    <PortfolioCta/>
    <FooterServices/>
    </>
  )
}

export default Portfolio