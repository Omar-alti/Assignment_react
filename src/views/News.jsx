import React from 'react'
import OurNews from '../components/NewsPage/OurNews/OurNews'
import NewsUpdate from '../components/NewsUpdate/NewsUpdate'
import Showcase from '../components/NewsPage/Showcase/Showcase'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const News = () => {
    return (
        <div className="wrapper-grid">
            <Header />
            <main>
                <Showcase />
                <OurNews />
                <NewsUpdate />
            </main>
            <Footer />
        </div>
    )
}

export default News