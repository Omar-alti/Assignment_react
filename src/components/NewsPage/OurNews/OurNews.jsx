import React from 'react'
import ArticleBoxes from '../../Generics/ArticleBoxes'
import { useArticles } from '../../../Contexts/ArticlesApiContext'

const OurNews = () => {
    const sBtn = ["<", "1", "2", "3", "...", "9", ">"]
    const { articles } = useArticles();

    return (
        <div className="container">
            <div className="pageTitle"><h2>Our News & Articles</h2></div>
            <div className="article-boxes">
                {
                    articles.map((article) => (
                        <ArticleBoxes key={article.id} date={article.published} articleImg={article.imageUrl} content={article.content} title={article.title} category={article.category} url={`/NewsDetailes/${article.id}`} />
                    ))
                }
            </div>
            <div className='smallBtns'>
                {
                    sBtn.map((btn, index) => (
                        <button key={index} className="smallBtn">{btn}</button>
                    ))
                }
            </div>
        </div>
    )
}

export default OurNews


