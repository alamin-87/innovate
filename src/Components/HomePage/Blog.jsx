import React from "react";
import "./Blog.css";
import { BsFillCalendarDateFill } from "react-icons/bs";

const Blog = () => {
  return (
    <>
      <section className="blog_section">
        <div className="container">
          <div className="blog_row">
            <div className="blog_row1">
              <h5>New Blog</h5>
              <h3>Latest Updates and News</h3>
            </div>
            <div className="blog_row2">
              <div className="blog_row2_single_card">
                <div className="single_card_img">
                  <img src="images/blog.png" alt="blogimg" />
                </div>
                <div className="single_card_text">
                  <h4>Simple Juice Recipes to boost your immune system</h4>
                  <p>
                    Objectively restore stand-alone markets rather than
                    enterprise-wide products.{" "}
                  </p>
                </div>
                <div className="single_card_person">
                  <div className="single_card_person1">
                     <img src="images/me.jpg" alt="me" />
                     <p>Esther Howard</p>
                  </div>
                  <div className="single_card_person_icon">
                    <BsFillCalendarDateFill className="icon"/>
                    <p>8 Sep, 2021</p>
                  </div>
                </div>
              </div>
              <div className="blog_row2_single_card">
                <div className="single_card_img">
                  <img src="images/blog.png" alt="blogimg" />
                </div>
                <div className="single_card_text">
                  <h4>Simple Juice Recipes to boost your immune system</h4>
                  <p>
                    Objectively restore stand-alone markets rather than
                    enterprise-wide products.{" "}
                  </p>
                </div>
                <div className="single_card_person">
                  <div className="single_card_person1">
                     <img src="images/me.jpg" alt="me" />
                     <p>Esther Howard</p>
                  </div>
                  <div className="single_card_person_icon">
                    <BsFillCalendarDateFill className="icon"/>
                    <p>8 Sep, 2021</p>
                  </div>
                </div>
              </div>
              <div className="blog_row2_single_card">
                <div className="single_card_img">
                  <img src="images/blog.png" alt="blogimg" />
                </div>
                <div className="single_card_text">
                  <h4>Simple Juice Recipes to boost your immune system</h4>
                  <p>
                    Objectively restore stand-alone markets rather than
                    enterprise-wide products.
                  </p>
                </div>
                <div className="single_card_person">
                  <div className="single_card_person1">
                     <img src="images/me.jpg" alt="me" />
                     <p>Esther Howard</p>
                  </div>
                  <div className="single_card_person_icon">
                    <BsFillCalendarDateFill className="icon"/>
                    <p>8 Sep, 2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
