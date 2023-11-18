import React from 'react'
import ArticleBoxes from '../../Generics/ArticleBoxes';
import { useArticles } from '../../../Contexts/ArticlesApiContext';

const Articles = ({ a, b}) => {
    const {articles} = useArticles()

     return (
        <>
            {articles.slice(a, b).map((article) => (<ArticleBoxes key={article.id} date={article.published}
                articleImg={article.imageUrl} title={article.title} category={article.category} content={article.content}
                url={`/NewsDetailes/${article.id}`} />))}
        </>
    )
}

export default Articles
