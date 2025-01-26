import React from 'react'
import './BlogFeature.css'
import { CiCalendarDate } from "react-icons/ci";

const BlogFeature = () => {
  return (
    <>
    <section className='blog_feature'>
        <div className="container">
            <div className="blog_feature_row">
                <div className="blog_feature_row1">
                    <div className="blog_feature_row1_img">
                        <img src="images/blogfeature.png" alt="blog" />
                    </div>
                    <div className="blog_feature_row1_text">
                        <div className="blog_feature_row1_text_header">
                            <h4>The hundred of completed works still counting</h4>
                            <p>Through strategy, design, and planning we build brand identities that connect with your Nesi.
                            We then fine-tune a marketing plan that allows us to laser focus and target your audience through the 
                            right channels.</p>
                        </div>
                        <div className="blog_feature_row1_text_footer">
                            <div className="row1_footer_man">
                                <img src="images/me.jpg" alt="me" />
                                <p>Esther Howard</p>
                            </div>
                            <div className="row1_footer_date">
                                <CiCalendarDate className='feature_icon' />
                                <p>8 Sep, 2021</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default BlogFeature