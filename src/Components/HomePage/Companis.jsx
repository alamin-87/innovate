import React from 'react'
import './Companis.css'
import company from '../../assets/company.png'

const Companis = () => {
  return (
    <>
    <section className='company_section' style={{backgroundImage:`url(${company})`}}>
      <div className="container">
        <div className="brand_row">
           <div className="brand_col1">
            <h3>Trusted by the world’s leading companies</h3>
            <button>Free Consultation</button>
           </div>
           <div className="brand_col2">
            <div className="col2_row1">
              <div className="col2_row1_success">
                <h5>150+</h5>
                <p>Finished Session</p>
              </div>
              <div className="col2_row1_success">
                <h5>100%</h5>
                <p>Satisfaction Rate</p>
              </div>
              <div className="col2_row1_success">
                <h5>350+</h5>
                <p>Trusted Clients</p>
              </div>
            </div>
            <div className="col2_row2">
              <img src="images/amd.png" alt="amd" />
              <img src="images/dropcam.png" alt="cropcam" />
              <img src="images/amazon.png" alt="amazon" />
              <img src="images/logitech.png" alt="logitech" />
            </div>
           </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Companis