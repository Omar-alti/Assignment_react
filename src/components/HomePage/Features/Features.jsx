import React from 'react'
import Hands from '../../../assets/images/hands.svg'
import Lampicon from '../../../assets/images/lampicon.svg'
import Stats from '../../../assets/images/stats.svg'
import Riskicon from '../../../assets/images/riskicon.svg'
import ArticleBox from './ArticleBox'
import SectionTitle from '../../Generics/SectionTitle'
import Button from '../../Generics/Buttons'

const stuff = [
    { title: "Business Advice", pic: Hands },
    { title: "Startup Business", pic: Lampicon },
    { title: "Financial Advic", pic: Stats },
    { title: "Risk Managemen", pic: Riskicon },
]

function Box() {
    const list = []
    for (let i = 0; i < stuff.length; i++) {
        list.push(<ArticleBox key={[i]} pic={stuff[i].pic} title={stuff[i].title} paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />)
    }
    return list;
}

const Features = () => {
    return (
        <section className="features-section">
            <div className="container">
                <div className="section-title">
                    <SectionTitle paragraph="Features" title="Our Accounting is trusted by thousand of companies" />
                     <Button type="yellow" url="/" text="Learn More" symbol="fa-regular fa-arrow-up-right" />
                </div>
                <div className="content">
                    {Box()}
                </div>
            </div>
        </section>
    )
}

export default Features