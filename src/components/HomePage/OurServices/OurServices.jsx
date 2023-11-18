import React from 'react'
import ServiceBox from './ServiceBox'
import Button from '../../Generics/Buttons'
import Lines from '../../../assets/images/our servises-lines.svg'
import SectionTitle from '../../Generics/SectionTitle'

const OurServices = () => {
    const services = [
        { id: 1, title: "Business Advice", paragraph: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url: "/" },
        { id: 2, title: "Startup Business", paragraph: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url: "/" },
        { id: 3, title: "Financial Advice", paragraph: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url: "/" },
        { id: 4, title: "Risk Management", paragraph: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url: "/" }
    ]
    return (
        <>
            <section className="our-services">
                <img className="white-lines" src={Lines} alt="lines" />
                <div className="container">
                    <div className='section-title'>
                        <SectionTitle paragraph="Our Services" title="We Provide The Best Service For Consulting" />
                    </div>
                    <div className="services-boxes">
                        {services.map((service) => (
                            <ServiceBox key={service.id} title={service.title} paragraph={service.paragraph} url={service.url} />
                        ))}
                    </div>
                    <div className="browse-btn"><Button text="Browse Services" to="/" type="transparent" symbol="fa-regular fa-arrow-up-right" /></div>
                </div>    
            </section >
        </>
    )
}

export default OurServices