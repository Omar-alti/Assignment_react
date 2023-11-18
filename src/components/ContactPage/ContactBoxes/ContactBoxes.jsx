import React from 'react'
import Boxes from './Boxes'

import Locationdot from '../../../assets/images/locationdot.svg'
import Phone from '../../../assets/images/phone.svg'
import Emailicon from '../../../assets/images/emailicon.svg'

const ContactBoxes = () => {
    return (
        <section className="contact-boxes">
            <div className="container">
                <Boxes img={Locationdot} paragraphOne="Sveavägen 31" paragraphTwo="111 34 STOCKHOLM" title="Visit us" />
                <Boxes img={Phone} paragraphOne="+46 (8) 121 470 50" paragraphTwo="+46 (8) 121 470 51" title="Call us" />        
                <Boxes img={Emailicon} paragraphOne="info@crito.com" paragraphTwo="support@crito.com" title="Email us" />      
            </div>
        </section>
    )
}

export default ContactBoxes