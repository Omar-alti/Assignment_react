import React from 'react'
import { useState } from 'react'
import Articles from '../HomePage/ArticleAndNews/GetArticles';

const CirclesAndArticles = ({ withArticles }) => {
    let [newArticles, setNewArticles] = useState(0);
    let [nextArticles, setNextArticles] = useState(3);

    function Next() {
        newArticles >= 6 ? setNewArticles(() => newArticles = 0) : setNewArticles(() => newArticles + 3)
        nextArticles >= 9 ? setNextArticles(() => nextArticles = 3) : setNextArticles(() => nextArticles + 3)
    }

    return (
        <>
            <div className="article-boxes">
                {withArticles === "yes" ? <Articles a={newArticles} b={nextArticles} /> : ""}
            </div>
            <div className="next">
                <button className="next-btn" onClick={() => { Next() }}>Next<i className="fa-regular fa-arrow-right"></i></button>
            </div>
        </>
    )
}

export default CirclesAndArticles