import React from 'react'
import './BlogHeader.css'
import blog from '../../assets/blog.png'

const BlogHeader = () => {
  return (
    <>
     <section className='blog_header' style={{backgroundImage:`url(${blog})`}}>
           <div className="container">
               <div className="blog_header_row">
                   <div className="blog_header_col1">
                       <h1>Our Latest News</h1>
                   </div>
                   <div className="blog_header_col2">
                       <span></span>
                       <p>With over 25 years of experience, we have crafted thousands of strategic discovery process that enables us to peel back the layers which enable us to understand, connect, represent and dominate your market.</p>
                   </div>
               </div>
           </div>
       </section>
    </>
  )
}

export default BlogHeader