import React from 'react'
import './PortfolioSection.css'

const PortfolioSection = () => {
  return (
    <>
    <section className='portfolio_section'>
        <div className="container">
            <div className="portfolio_section_row">
                <div className="portfolio_section_row1">
                    <ul>
                        <li><span>Email Marketing</span></li>
                        <li><span>Data Analysis</span></li>
                        <li><span>Optimization</span></li>
                        <li><span>Pay-par Click</span></li>
                        <li><span>Content Writting</span></li>
                        <li><span>Marketing</span></li>
                    </ul>
                </div>
                <div className="portfolio_section_row2">
                    <div className="portfolio_section_row2_card">
                        <img src="images/portfolio.png" alt="portfolio" />
                        <p>Business Planning</p>
                        <h4>Business Growth</h4>
                    </div>
                    <div className="portfolio_section_row2_card">
                        <img src="images/portfolio.png" alt="portfolio" />
                        <p>Business Planning</p>
                        <h4>Business Growth</h4>
                    </div>
                    <div className="portfolio_section_row2_card">
                        <img src="images/portfolio.png" alt="portfolio" />
                        <p>Business Planning</p>
                        <h4>Business Growth</h4>
                    </div>
                    <div className="portfolio_section_row2_card">
                        <img src="images/portfolio.png" alt="portfolio" />
                        <p>Business Planning</p>
                        <h4>Business Growth</h4>
                    </div>
                    <div className="portfolio_section_row2_card">
                        <img src="images/portfolio.png" alt="portfolio" />
                        <p>Business Planning</p>
                        <h4>Business Growth</h4>
                    </div>
                    <div className="portfolio_section_row2_card">
                        <img src="images/portfolio.png" alt="portfolio" />
                        <p>Business Planning</p>
                        <h4>Business Growth</h4>
                    </div>
                    <div className="portfolio_section_row2_card">
                        <img src="images/portfolio.png" alt="portfolio" />
                        <p>Business Planning</p>
                        <h4>Business Growth</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default PortfolioSection