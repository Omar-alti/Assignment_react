import React from 'react'
import {NavLink} from 'react-router-dom'

const ServiceBox = ({ title, paragraph, url }) => {
    return (
        <div>
            <NavLink to={url} >
                <article className="service-box">
                    <div className="line"></div>
                    <h3 className="h-3">{title}</h3>
                    <p>{paragraph}
                    </p>
                    <div className="button">
                        <div className="btn-round"><i className="fa-light fa-arrow-right"></i></div>
                    </div>
                </article>
            </NavLink>
        </div>
    )
}
export default ServiceBox
