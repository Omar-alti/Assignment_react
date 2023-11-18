import React from 'react'

const ReviewBoxes = ({icon,alt,paragraphOne,paragraphTwo,img,title}) => {
    return (
        <div className="ratingbox">
            <img src={icon} alt="picture of rating-stars" />
            <p>{paragraphOne}</p>

            <div className="rating-person">
                <img src={img} alt={alt} />
                <div className="name">
                    <h3 className="h-3">{title}</h3>
                    <p>{paragraphTwo}</p>
                </div>
            </div>
        </div>
    )
}

export default ReviewBoxes