import React from 'react'
import Lines from '../../assets/images/footer-lines.svg'
import FooterLogo from '../../assets/images/Logo footer.svg'
import ListBox from './ListBox'
import Social from '../Header/SocialMedia'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <footer className="footer-section-one">
            <img className="footer-lines" src={Lines} alt="lines" />
            <div className="container">
                <div className="box1">
                    <Link onClick={() => { window.scrollY(top = 0) }} to="/"><img src={FooterLogo} alt="company-logo" /></Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas
                        voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
                </div>
                <div className="grid-box">
                    <ListBox title={"Company"} url={"/"} text1={"About"} text2={"Features"} text3={"Works"} text4={"Career"} />
                    <ListBox title={"Help"} url={"/"} text1={"Customer Support"} text2={"Delivery Details"} text3={"Terms & Conditions"} text4={"Privacy Policy"} />
                    <ListBox title={"Resources"} url={"/"} text1={"Free eBooks"} text2={"Development Tutorial"} text3={"How to - Blog"} text4={"youtube Playlist"} />
                    <ListBox title={"Resources"} url={"/"} text1={"Free eBooks"} text2={"Development Tutorial"} text3={"How to - Blog"} text4={"youtube Playlist"} />
                </div>
            </div>

            <div className="footer-section-two">
                <div className="container">
                    <div className="all-rights">
                        <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
                    </div>
                    < Social />
                </div>
            </div>
        </footer>
    )
}

export default Footer