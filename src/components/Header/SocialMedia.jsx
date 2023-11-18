import React from 'react'
import { Link } from 'react-router-dom'

const SocialMedia = () => {
    return (
        <>
            <div className="social-media">
                <Link to="https://facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></Link>
                <Link to="https://twitter.com/" target="_blank"><i className="fa-brands fa-twitter"></i></Link>
                <Link to="https://instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></Link>
                <Link to="https://linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
            </div>
        </>
    )
}

export default SocialMedia