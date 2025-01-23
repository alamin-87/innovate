import React from 'react'
import './PortfolioFooter.css'

const PortfolioFooter = () => {
  return (
    <>
     <section className='portfolio_footer'>
            <div className="container">
                <div className="portfolio_footer_row">
                    <div className="portfolio_footer_col1">
                        <Link to="portfoliohero"> <img src="images/logo1.png" alt="logo" /></Link>
                        <p>Install any demo or template with a single click. You can mix and match all the demos
                        & templates. Every demo can be turned into one or multi-page.</p>
                    </div>
                    <div className="portfolio_footer_col2">
                        <h4>Features</h4>
                        <ul>
                            <li><Link to="hero">Home</Link></li>
                            <li><Link to="#">About</Link></li>
                            <li><Link to="#">Benefit</Link></li>
                            <li><Link to="#">Pricing</Link></li>
                            <li><Link to="#">Blog</Link></li>
                        </ul>
                    </div>
                    <div className="portfolio_footer_col2">
                        <h4>Products</h4>
                        <ul>
                            <li><Link to="#">Task Management</Link></li>
                            <li><Link to="#">Company growth</Link></li>
                            <li><Link to="#">Time tracking</Link></li>
                        </ul>
                    </div>
                    <div className="portfolio_footer_col2">
                        <h4>Support</h4>
                        <ul>
                            <li><Link to="#">Customer service</Link></li>
                            <li><Link to="#">Accessibility</Link></li>
                            <li><Link to="#">Contact us</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default PortfolioFooter