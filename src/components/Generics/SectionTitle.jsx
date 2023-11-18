import React from 'react'

export const SectionTitle = ({ paragraph, title }) => {
    return (
        <div className="section-title">
            <p className="title-p">{paragraph}</p>
            <h2>{title}</h2>
        </div>
    )
}
export default SectionTitle