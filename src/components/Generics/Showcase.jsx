import React from 'react'
import Lines from '../../assets/images/showcase-lines.svg'
import { Link } from 'react-router-dom'

const Showcase = ({url,title,linkText}) => {
    return (
        <section>
            <div className="showcase">
                <img className="showcase-lines" src={Lines} />
                <div className="container">
                    <div className="showcase-title">
                        <Link className="link" to={"/"}>Home</Link>
                        <Link className="link active bold" to={url}>{linkText}</Link>
                        <h1>{title}</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Showcase