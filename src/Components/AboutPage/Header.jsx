import React from 'react'
import './Header.css'
import header from '../../assets/header.png'

const Header = () => {
  return (
    <>
    <section className='header' style={{backgroundImage:`url(${header})`}}>
        <div className="container">
            <div className="header_row">
                <div className="header_col1">
                    <h1>Know more about innovate</h1>
                </div>
                <div className="header_col2">
                    <span></span>
                    <p>With over 25 years of experience, we have crafted thousands of strategic discovery process that enables us to peel back the layers which enable us to understand, connect, represent and dominate your market.</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Header