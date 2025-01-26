import React from 'react'
import BlogHeader from '../Components/BlogPage/BlogHeader'
import BlogFeature from '../Components/BlogPage/BlogFeature'
import BlogCards from '../Components/BlogPage/BlogCards'
import PortfolioCta from '../Components/PortfolioPage/PortfolioCta'
import FooterServices from '../Components/ServicesPage/FooterServices'

const Blog = () => {
  return (
    <>
    <BlogHeader/>
    <BlogFeature/>
    <BlogCards/>
    <PortfolioCta/>
    <FooterServices/>
    </>
  )
}

export default Blog