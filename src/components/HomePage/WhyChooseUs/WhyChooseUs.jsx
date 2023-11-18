import React from 'react'
import Women from '../../../assets/images/two-women.svg'
import SectionTitle from '../../Generics/SectionTitle'
import IconTextBox from './IconTextBox'


function WhyChooseUs() {
    return (
        <section className="why-choose-us">
            <div className="container">
                <div className="experience-box">
                    <div className="section-title">
                        <SectionTitle paragraph="Why Choose Us" title="Why We Are The Best Business Consulting Agency" />
                    </div>
                        <IconTextBox />
                </div>
                <div className="background-box">
                    <img src={Women} alt="two women talking" />
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs