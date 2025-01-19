import React, { useState } from 'react'
import './Invest.css'
import { FaPlus } from "react-icons/fa6";


const Invest = () => {
    const [show, setshow] =useState(false)
  return (
    <>
    <section className='invest_section'>
        <div className="container">
            <div className="invest_row">
                <div className="invest_col1">
                    <img src="images/invest.png" alt="invest" />
                </div>
                <div className="invest_col2">
                    <div className="col2_head">
                        <h2>Startup digital platform for investing</h2>
                    </div>
                    <div className="invest_col2_card">
                    <div className="col2_card">
                        <p>Securing Digital Payment</p>
                        <FaPlus className='icon' onClick={()=>setshow(!show)} />
                        {
                         show&&
                         <div className="invest_col2_text">
                            <p>Through our Connected Content™ approach, we unite communications, digital experiences, 
                             and performance marketing to help more than 1600 global companies.</p>
                         </div>
                        }
                    </div>
                    <div className="col2_card">
                        <p>Securing Digital Payment</p>
                        <FaPlus className='icon' onClick={()=>setshow(!show)} />
                        {
                            show&&
                        <div className="invest_col2_text">
                            <p>Through our Connected Content™ approach, we unite communications, digital experiences, and performance marketing to help more than 1600 global companies.</p>
                        </div>
                        }
                    </div>
                    <div className="col2_card">
                        <p>Securing Digital Payment</p>
                        <FaPlus className='icon' onClick={()=>setshow(!show)} />
                        {
                            show&&
                        <div className="invest_col2_text">
                            <p>Through our Connected Content™ approach, we unite communications, digital experiences, and performance marketing to help more than 1600 global companies.</p>
                        </div>
                        }
                    </div>
                    <div className="col2_card">
                        <p>Securing Digital Payment</p>
                        <FaPlus className='icon' onClick={()=>setshow(!show)} />
                        {
                            show&&
                        <div className="invest_col2_text">
                            <p>Through our Connected Content™ approach, we unite communications, digital experiences, and performance marketing to help more than 1600 global companies.</p>
                        </div>
                        }
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Invest