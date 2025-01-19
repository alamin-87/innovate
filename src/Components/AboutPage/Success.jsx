import React from 'react'
import './Success.css'
import success from '../../assets/success.png'
import { Link } from 'react-scroll'

const Success = () => {
  return (
    <>
    <section className='success' style={{backgroundImage:`url(${success})`}}>
        <div className="container">
            <div className="success_row">
                <div className="success_col1">
                    <div className="success_col1_card">
                        <p>19+</p>
                        <span>Total top service</span>
                    </div>
                    <div className="success_col1_card">
                        <p>19+</p>
                        <span>Total top service</span>
                    </div>
                    <div className="success_col1_card">
                        <p>19+</p>
                        <span>Total top service</span>
                    </div>
                    <div className="success_col1_card">
                        <p>19+</p>
                        <span>Total top service</span>
                    </div>
                </div>
                <div className="success_col2">
                    <h3>The hundred of completed works still counting</h3>
                    <p>Through strategy, design, and planning we build brand identities that connect with your Nesi. We then fine-tune a marketing plan that allows us to laser focus and target your audience through the right channels.</p>
                    <Link to="#">More about us</Link>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Success