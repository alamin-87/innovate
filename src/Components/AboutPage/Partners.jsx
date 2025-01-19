import React from 'react'
import './Partners.css'

const Partners = () => {
  return (
    <>
    <section className='partners'>
        <div className="container">
            <div className="partners_row">
                <div className="Partners_row1">
                    <h2>Trusted by top global companies And orginizations</h2>
                </div>
                <div className="partners_row2">
                    <div className="partners_row2_card">
                        <img src="images/frame.png" alt="frame" />
                    </div>
                    <div className="partners_row2_card">
                        <img src="images/creon.png" alt="creon" />
                    </div>
                    <div className="partners_row2_card">
                        <img src="images/rinfall.png" alt="rinfall" />
                    </div>
                    <div className="partners_row2_card">
                        <img src="images/ulabs.png" alt="ulabs" />
                    </div>
                    <div className="partners_row2_card">
                        <img src="images/spider.png" alt="spider" />
                    </div>
                    <div className="partners_row2_card">
                        <img src="images/widegde.png" alt="widegde" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Partners