import Button from '../../Generics/Buttons'
import SectionTitle from '../../Generics/SectionTitle'
import CirclesAndArticles from '../../Generics/ButtonAndArticles'

const ArticleAndNews = () => {
    return (
        <section className="articles-and-news">
            <div className="container">
                <div className="heading-and-btn">
                    <div className="section-title">
                        <SectionTitle paragraph="Article & News" title="Get Every Single Articles & News" />
                    </div>
                    <Button type="transparent" text="Browse Articles" url="/News" symbol="fa-regular fa-arrow-up-right" />
                </div>
                    <CirclesAndArticles withArticles="yes" />
            </div>
        </section>
    )
}

export default ArticleAndNews