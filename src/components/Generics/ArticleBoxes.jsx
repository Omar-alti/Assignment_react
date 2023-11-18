import React from 'react'
import { Link } from 'react-router-dom'

const ArticleBoxes = ({ articleImg, title, url, content, category, date }) => {
    date = new Date(date);
    const pDate = date.toLocaleDateString('sv-SE')
    return (
        <Link onClick={() => { window.scrollY(top = 0) }} to={url}>
            <div className="article-box">
                <p className="date">{pDate}</p>
                <img className="article-pic" src={articleImg} />
                <p>{category}</p>
                <h3 className="h-3">{title}</h3>
                <p>{content}</p>
            </div>
        </Link>
    )
}

export default ArticleBoxes