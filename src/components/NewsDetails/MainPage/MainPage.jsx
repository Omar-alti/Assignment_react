import React, { useEffect } from 'react'
import '../../../assets/images/Group 1000005004.png'
import Button from '../../Generics/Buttons'
import Searchbox from '../Searchbox/Searchbox'
import ArticleAndNews from '../../HomePage/ArticleAndNews/ArticleAndNews'
import { useParams } from 'react-router-dom'
import { useArticles } from '../../../Contexts/ArticlesApiContext'

const greyButtons = [
    { id: 1, type: "grey", text: "Digitalization", url: "#" },
    { id: 2, type: "grey", text: "School", url: "#" },
    { id: 3, type: "grey", text: "IT", url: "#" },
    { id: 4, type: "grey", text: "Design", url: "#" },
    { id: 5, type: "grey", text: "Work", url: "#" },
    { id: 6, type: "grey", text: "Tech", url: "#" }
]

function Newsbox() {
    const { id } = useParams();
    const { article, getArticle } = useArticles();

    useEffect(() => {
        getArticle(id);
    }, [])

    const date = new Date(article?.published);
    const pDate = date.toLocaleDateString('sv-SE')

    return (
        <div >
            <div className="container">
                <div className="news-detailes">
                    <div>
                        <div className="newsbox">
                            {
                                article ?
                                    (
                                        <>
                                            <h2>{article.title}</h2>
                                            <div className="d-c-n">
                                                <p>{pDate}</p>
                                                <div className="yellow-dot"></div>
                                                <p>{article.category}</p>
                                                <div className="yellow-dot"></div>
                                                <p>{article.author}</p>
                                            </div>
                                            <img src={article.imageUrl} alt="girl" />
                                        </>
                                    )
                                    : (<p>Loading..</p>)
                            }
                        </div>

                        <div className="text-info">
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. <br />
                                <br />
                                Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.<br />
                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. uspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.<br />
                                <br />
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.<br />
                                <br />
                                Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.<br />
                                Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
                            </p>
                            <div className="qutation">
                                <div className="qutations">‟</div>
                                <span>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                                </span>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                            </p>
                        </div>
                        <div className="grey-btns">
                            {
                                greyButtons.map((button) => (
                                    <Button key={button.id} type={button.type} text={button.text} url={button.url} />
                                ))
                            }
                        </div>
                    </div>
                    <Searchbox />
                </div>
            </div>
            <div className="articles-news">
                <ArticleAndNews />
            </div>
        </div >
    )
}

export default Newsbox