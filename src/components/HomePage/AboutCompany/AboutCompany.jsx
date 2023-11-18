import React from 'react'
import SectionTitle from '../../Generics/SectionTitle'
import Lines from '../../../assets/images/samantha-lines.svg'
import Samantha from '../../../assets/images/samantha.svg'
import Button from '../../Generics/Buttons'

const AboutCompany = () => {
    return (
        <section className="about-section">
            <div className="container">
                <div className="picture">
                    <img src={Samantha} alt="a woman walking in office" />
                    <img className="samatha-lines" src={Lines} alt="lines" />
                    <div className="blue-square">
                        <h3 className="h-3">Samantha Brown, <span>Founder</span> </h3>
                        <p>"Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit."</p>
                    </div>
                </div>
                <div className="section-title">
                    <SectionTitle paragraph="About Company" title="We Are Business Consulting & Credit Repair Experts" />
                    <p className="about-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis
                        quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.<br /><br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci
                        accusantium libero provident voluptate amet.
                    </p>
                    <div className="btn-video-text">
                        <Button type="black" url="/" text="Learn More" />
                        <Button type="round" Target="blank_" url="#" symbol="fa-regular fa-play" />
                        <p>Intro Video</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutCompany