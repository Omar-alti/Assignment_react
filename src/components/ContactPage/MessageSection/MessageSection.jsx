import React from 'react'
import SectionTitle from '../../Generics/SectionTitle'
import ContactForm from './ContactForm'

const MessageSection = () => {
    return (
        <section className="message">
            <div className="container">
                <div className="section-title">
                    <SectionTitle title="Leave us a message for any information." />
                </div>
                <div className="inner-container">
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default MessageSection