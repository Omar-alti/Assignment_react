import React from 'react'
import ArticleBox from './ArticleBox'
import Button from '../../Generics/Buttons'

const ProjectAndCase = () => {
    return (
        <section className="project-and-case-section">
            <div className="container">
                <div className="section-title">
                    <p>Project & Case Studies</p>
                    <h2>Let’s Look At Our Global Projects</h2>
                </div>
                <div className="articles">
                  <ArticleBox />
                </div>        
                <div className="button"><Button type="black" text="All Recent Projects" url="/" symbol="fa-regular fa-arrow-up-right" /></div>
            </div>
        </section>
    )
}

export default ProjectAndCase