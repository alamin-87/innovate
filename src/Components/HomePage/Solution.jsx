import React from 'react'
import './Solution.css'

const Solution = () => {
  return (
    <>
    <section className='solution_section'>
        <div className="container">
            <div className="solution_row">
                <div className="solution_col1">
                    <div className="col1_text1">
                        <h2>Best Reliable Solution For Your Business</h2>
                        <p>We help our clients succeed by creating brand identities, digital experiences, and print materials that communicate clearly, achieve marketing.</p>
                        <button>get started now</button>
                    </div>
                    <div className="col1_text2">
                        <div className="text2_text">
                            <h3>First-class investment solutions</h3>
                            <p>We can help you with your business strategy, architecture, mapping, and optimisation. </p>
                        </div>
                        <div className="text2_text">
                            <h3>Building 
                            the idea of future</h3>
                            <p>Offering Performance Driven Partnerships CIBA Specializes In Business Process Outsourcing. </p>
                        </div>
                    </div>
                </div>
                <div className="solution_col2">
                    <img src="images/solution.png" alt="solution" />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Solution
