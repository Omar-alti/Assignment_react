import React from 'react'
import '../index.css'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Showcase from '../components/HomePage/Showcase/Showcase'
import BrandMetions from '../components/HomePage/BrandMentions/BrandMetions'
import Features from '../components/HomePage/Features/Features'
import AboutCompany from '../components/HomePage/AboutCompany/AboutCompany'
import OurServices from '../components/HomePage/OurServices/OurServices'
import WhyChooseUs from '../components/HomePage/WhyChooseUs/WhyChooseUs'
import ProjectAndCase from '../components/HomePage/ProjectAndCase/ProjectAndCase'
import MeetOurTeam from '../components/HomePage/MeetOurTeam/MeetOurTeam'
import ArticleAndNews from '../components/HomePage/ArticleAndNews/ArticleAndNews'
import NewsUpdate from '../components/NewsUpdate/NewsUpdate'

const Home = () => {
    return (
        <div className="wrapper-grid">
            <Header />
            <main>
                <Showcase />
                <BrandMetions />
                <Features />
                <AboutCompany />
                <OurServices />
                <WhyChooseUs />
                <ProjectAndCase />
                <MeetOurTeam />
                <ArticleAndNews />
                <NewsUpdate />
            </main>
            <Footer />
        </div>
    )
}

export default Home