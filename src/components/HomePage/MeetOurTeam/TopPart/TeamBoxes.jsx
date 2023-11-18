import React from 'react'

const TeamBoxes = ({ paragraph, title, img, alt, }) => {
    return (
        <>
            <div className="employee">
                <img src={img} alt={alt} />
                <h3 className="h-3">{title}</h3>
                <p>{paragraph}</p>
            </div>
        </>
    )
}

export default TeamBoxes