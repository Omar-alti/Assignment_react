import React from 'react'
import Lines from '../../../assets/images/showcase-lines.svg'
import ManWithSuit from '../../../assets/images/image.svg'
import Button from '../../Generics/Buttons'

const Showcase = () => {
    return (
        <section className="showcase">
            <img className="showcase-lines" src={Lines} alt="white lines" />
            <div className="container">
                <div className="content">
                    <h1>We Provide The Best Business Solutions</h1>
                    <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                    <div className="section-buttons">
                        <Button type="yellow" to="/" text="Get Consulting" symbol="fa-regular fa-arrow-up-right" />
                        <Button type="transparent" to="/" text="Learn More" symbol="fa-regular fa-arrow-up-right" />
                    </div>
                </div>
                <div className="showcase-image"><img src={ManWithSuit} alt="A man in a suit and a tablet" />
                </div>
            </div>
        </section>
    )
}
export default Showcase