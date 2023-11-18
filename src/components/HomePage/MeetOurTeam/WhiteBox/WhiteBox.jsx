import React from 'react'
import Cassandra from '../../../../assets/images/cassandra warren.svg'
import Amanda from '../../../../assets/images/amanda tulling.svg'
import Jack from '../../../../assets/images/jack mcdogglas.svg'
import Star from '../../../../assets/images/Star.png'
import ReviewBoxes from './ReviewBoxes'
import Button from '../../../Generics/Buttons'
import SectionTitle from '../../../Generics/SectionTitle'

const pText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero," +
"addignissimos velit qui, doloum obcaecati cum saepe nesciunt nemo eligendi numquamvoluptate"

const WhiteBox = () => {
    return (
        <div className="whitebox">
            <div className="section-title">
                <SectionTitle title="What Our Client Says" paragraph="Testimonial" />
            </div>
            <div className="rating-boxes">
                <ReviewBoxes icon={Star} alt="picture of cassandra warren" paragraphOne={pText} paragraphTwo="Business Manager, Dorfus" title="Cassandra Warren" img={Cassandra} />
                <ReviewBoxes icon={Star} alt="picture of amanda tulling" paragraphOne={pText} paragraphTwo="Senior Developer, Square" title="Amanda Tulling" img={Amanda} />
                <ReviewBoxes icon={Star} alt="picture of jack mcdogglas" paragraphOne={pText} paragraphTwo="Key Account Manager, Gobona" title="Jack McDogglas" img={Jack} />
            </div>
            <div className="button"><Button type="black" text="AllReviews" symbol="fa-regular fa-arrow-up-right" url="/" /></div>
        </div>
    )
}

export default WhiteBox