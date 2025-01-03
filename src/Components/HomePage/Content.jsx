import React from 'react'
import './Content.css'
import { Link } from 'react-router'
import content from '../../assets/content.png'
import { FaStar } from "react-icons/fa";

const Content = () => {
  return (
    <>
      <section className='contenr' style={{backgroundImage:`url(${content})`}}>
        {/* <img src="images/content.png" alt="content" /> */}
        <div className="container">
           <div className="content_row">
            <div className="content_col1">
                <div className="con1_text">
                <h1>We Provide Premium Consulting Service For your Business</h1>
                <p>The Premium Consulting Service provides a faster way to process plans, register dealings and create titles.</p>
                <button>get started now</button>
                <p>Already member of our communty? <Link to="/signup">Sign in</Link></p>
                </div>
                <div className="col1_review">
                    <div className="review_img">
                    <div className="img1">
                        <img src="images/me.jpg" alt="me" />
                    </div>
                    <div className="img2">
                        <img src="images/me.jpg" alt="me" />
                    </div>
                    <div className="img3">
                        <img src="images/me.jpg" alt="me" />
                    </div>
                    <div className="img4">
                        <img src="images/me.jpg" alt="me" />
                    </div>
                    </div>
                    <div className="review">
                        <div className="review_icon">
                            <div className="review_icon_text">
                            <p>4.5</p>
                            <span></span>
                            </div>
                            <div className="review_icon_icon">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            </div>
                        </div>
                        <div className="review_text">
                            <p>305k Total Review</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content_col2">
                <img src="images/man1.png" alt="man1" />
            </div>
           </div>
        </div>
      </section>
    </>
  )
}

export default Content