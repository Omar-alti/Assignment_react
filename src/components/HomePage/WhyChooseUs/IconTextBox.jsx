import React from 'react'
import Icon1 from '../../../assets/images/icon-1.svg'
import Icon2 from '../../../assets/images/icon-2.svg'
import Icon3 from '../../../assets/images/icon-3.svg'
import Icon4 from '../../../assets/images/icon-4.svg'

function IconTextBox() {
    const BoxItems = [
        { id: 1, title: "Process Excellence", paragraph: "Lorem, ipsum dolor sit amet consectetur.", icon: Icon1},
        { id: 2, title: "Strategic Planning", paragraph: "Lorem, ipsum dolor sit amet consectetur.", icon: Icon2},
        { id: 3, title: "Experience Design", paragraph: "Lorem, ipsum dolor sit amet consectetur.", icon: Icon3},
        { id: 4, title: "Artificial Inteligence", paragraph: "Lorem, ipsum dolor sit amet consectetur.", icon: Icon4}
    ]
    return (
        BoxItems.map((item) => (
            <div key={item.id} className="icons-and-text-box">
            <img src={item.icon} alt="icon" />
            <div className="icon-text">
                <h3 className="h-3">{item.title}</h3>
                <p>{item.paragraph}</p>
            </div>
          </div>
        ))
    )
}export default IconTextBox
