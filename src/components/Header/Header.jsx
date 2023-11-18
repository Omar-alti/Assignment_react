import React, { useEffect, useState } from 'react'
import Logo from '../../assets/images/Logo.svg'
import { Link } from 'react-router-dom'
import Contact from './ContactInformation'
import SocialMedia from './SocialMedia'
import Nav from './Nav'
import MobileMenu from './MobileMenu'

const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    let windowSize = window.innerWidth;
    window.addEventListener("resize", size)

    function size() {
        if (windowSize > 768) {
            setMobileMenu(false)
        }
    }

    return (
        <header>
            <div className="container">
                <Link to="/"><img src={Logo} alt="The company logo" /></Link>
                <button className="menu-bars" onClick={() => { setMobileMenu(!mobileMenu) }} >
                    {mobileMenu ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
                </button>
                <div className="menu">
                    <div className="top-of-header">
                        <Contact />
                        <SocialMedia />
                    </div>
                    <div className="nav-header">
                        <Nav />
                    </div>
                </div>
            </div>
            {mobileMenu ? (<MobileMenu />) : ""}
        </header>
    )
}

export default Header