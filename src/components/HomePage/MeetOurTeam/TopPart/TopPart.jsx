import React from 'react'
import TeamBoxes from './TeamBoxes'
import Button from '../../../Generics/Buttons'
import SectionTitle from '../../../Generics/SectionTitle'
import CirclesAndArticles from '../../../Generics/ButtonAndArticles'
import Kristine from '../../../../assets/images/kristine palmer.png'
import Aubri from '../../../../assets/images/mark aubri.png'
import Kimberly from '../../../../assets/images/kimberly hansen.png'
import Justin from '../../../../assets/images/justin willoman.png'

const TopPart = () => {
    const Team = [
        { id: 1, title: "Kristine Palmer", paragraph: "Chef Operation Officer", img: Kristine, alt: "image of kristine palmer" },
        { id: 2, title: "Mark Aubri", paragraph: "Senior Consultant", img: Aubri, alt: "image of mark aubri" },
        { id: 3, title: "Kimberly Hansen", paragraph: "Senior Consultant", img: Kimberly, alt: "image of kimberly hansen" },
        { id: 4, title: "Justin Willoman", paragraph: "Senior Tech Consultant", img: Justin, alt: "image of justin willoman" }
    ];

    return (
        <div className="top-part">
            <div className="title-and-button">
                <div className="section-title">
                    <SectionTitle title="Experience Team Members" paragraph="Meet Our Team" />
                </div>
                <div className="button">
                <Button type="transparent" text="Browse Team" symbol="fa-regular fa-arrow-up-right" url="/" />
                </div>
            </div>
            <div className="employees">
                {Team.map((employee) => (
                    <TeamBoxes key={employee.id} paragraph={employee.paragraph} title={employee.title} img={employee.img} alt={employee.alt} />
                ))}
            </div>
            <div className="circles">
                < CirclesAndArticles withArticles="no" />          
            </div>
        </div>
    )
}

export default TopPart
