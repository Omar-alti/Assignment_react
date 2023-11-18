import React from 'react'
import Header from '../components/Header/Header'
import Showcase from '../components/NewsPage/Showcase/Showcase'
import MainPage from '../components/NewsDetails/MainPage/MainPage'
import Footer from '../components/Footer/Footer'

const NewsDetailes = () => {
    return (
        <div className="wrapper-grid">
            <Header />
            <main>
                <Showcase />
                <MainPage />
            </main>
            <Footer />
        </div>
    )
}

export default NewsDetailes