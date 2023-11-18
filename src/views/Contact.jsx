import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Showcase from '../components/ContactPage/Showcase/Showcase'
import ContactBoxes from '../components/ContactPage/ContactBoxes/ContactBoxes'
import MessageSection from '../components/ContactPage/MessageSection/MessageSection'
import Map from '../components/ContactPage/Map/Map'


const Contacts = () => {
    return (
        <div className="wrapper-grid">
            <Header />
            <main>
                <Showcase />
                <ContactBoxes />
                <MessageSection />
                <Map />
            </main>
            <Footer />
        </div>
    )
}

export default Contacts