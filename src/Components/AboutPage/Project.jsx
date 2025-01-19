import React from 'react'
import './Project.css'
import project from '../../assets/project.png'
import { Link } from 'react-router'

const Project = () => {
  return (
    <>
    <section className='project' style={{backgroundImage:`url(${project})`}}>
        <div className="container">
            <div className="project_row">
                <div className="project_row1">
                    <div className="project_row1_text">
                        <span>Lets talk</span>
                        <h3>Got A Project?</h3>
                    </div>
                    <div className="project_row1_link">
                        <Link to="#">Contact us</Link>
                    </div>
                </div>
                <div className="project_row2">
                    <span />
                    <p>As a leading digital platform in Paris, we look to engage with our clients beyond the conventional design and development agency relationship, becoming a partner to the people and companies we work with.  </p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Project