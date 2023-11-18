import React from 'react'

const Boxes = ({img,title,paragraphOne,paragraphTwo}) => {
    return (
        <div className="contact-box">
            <img src={img} alt="icon" />
            <div>
                <h3 className="h-3">{title}</h3>
                <p>{paragraphOne}</p>
                <p>{paragraphTwo}</p>
            </div>
        </div>
    )
}

export default Boxes