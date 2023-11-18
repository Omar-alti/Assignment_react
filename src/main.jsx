import React from 'react'
import ReactDOM from 'react-dom/client'
// import './assets/GenericCss.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Home from './views/Home'
import News from './views/News'
import Contact from './views/Contact'
import NewsDetailes from './views/NewsDetailes'
import PageNotFound from './views/PageNotFound'
import { ArticleProvider } from './Contexts/ArticlesApiContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <ArticleProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<PageNotFound />} />
                    <Route path="/News" element={<News />} />
                    <Route path="/NewsDetailes/:id" element={<NewsDetailes />} />
                    <Route path="/Contact" element={<Contact />} />
                </Routes>
            </ArticleProvider>
        </BrowserRouter>
    </React.StrictMode>
)
