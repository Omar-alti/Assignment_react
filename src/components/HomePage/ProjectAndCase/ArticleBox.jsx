import React from 'react'
import Business from '../../../assets/images/business.svg'
import ResponsiveWebsite from '../../../assets/images/responsive website.svg'
import EducateEmployees from '../../../assets/images/educate employees.svg'
import BusinessInsights from '../../../assets/images/business insights.svg'
import { Link } from 'react-router-dom'

const BoxItems = [
    { id: 1, title: "Grow your business", paragraph: "Read More", img: Business, alt: "picture of someone reading a paper"},
    { id: 2, title: "Why your client needs a responsive website", paragraph: "Read More", img: ResponsiveWebsite, alt: "picture of a phone and a pair of glases" },
    { id: 3, title: "Educate your employees to get better results", paragraph: "Read More", img: EducateEmployees, alt: "picture of a desk with some deskstuff on it" },
    { id: 4, title: "Business Insights is a important piece of your business", paragraph: "Read More", img: BusinessInsights, alt: "picture of a laptop" }
]
function ArticleBox() {
    return (
        BoxItems.map((items) => (
            <article key={items.id} className="image-box">
                <Link href="/">
                    <img src={items.img} alt={items.alt} />
                    <h3 className="h-3">{items.title}</h3>
                    <p>{items.paragraph}<i className="fa-regular fa-arrow-up-right"></i></p>
                </Link>
            </article>
        ))
    )
}export default ArticleBox