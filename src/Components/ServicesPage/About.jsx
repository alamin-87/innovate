import React from 'react'
import './About.css'
import { Link } from 'react-scroll'

const About = () => {
  return (
    <>
    <section className='about'>
        <div className="container">
            <div className="about_row">
                <div className="about_col1">
                    <div className="about_col1_header">
                        <h2>25 Years Of Experience We Provide Solutions</h2>
                    </div>
                    <div className="about_col1_card">
                        <div className="about_col1_cards">
                            <div className="about_card_icon">
                               <img src="images/aboutcard1.png" alt="aboutcard1" />
                            </div>
                            <div className="about_card_text">
                                <p>Professional Agency</p>
                                <span>If you'd like to know how we can tap into your brand's potential, contact us to learn more about our services.</span>
                            </div>
                        </div>
                        <div className="about_col1_cards">
                            <div className="about_card_icon">
                               <img src="images/aboutcard2.png" alt="aboutcard2" />
                            </div>
                            <div className="about_card_text">
                                <p>Best Solutions Provider </p>
                                <span>We know more about digital direct response than virtually any digital marketing agency in the industry.</span>
                            </div>
                        </div>
                    </div>
                    <div className="about_col1_button">
                        <Link to="#">More about us</Link>
                    </div>
                </div>
                <div className="about_col2"></div>
            </div>
        </div>
    </section>
    </>
  )
}

export default About