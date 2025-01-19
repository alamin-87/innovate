import React from 'react'
import Content from '../Components/HomePage/Content'
import About from '../Components/HomePage/About'
import Services from '../Components/HomePage/Services'
import Solution from '../Components/HomePage/Solution'
import Team from '../Components/HomePage/Team'
import Invest from '../Components/HomePage/Invest'
import Companis from '../Components/HomePage/Companis'
import Customer from '../Components/HomePage/Customer'
import Blog from '../Components/HomePage/Blog'
import Footer from '../Components/HomePage/Footer'

const Home = () => {
  return (
    <>
     <Content/>
     <About/>
     <Services/>
     <Solution/>
     <Team/>
     <Invest/>
     <Companis/>
     <Customer/>
     <Blog/>
     <Footer/>
    </>
  )
}

export default Home