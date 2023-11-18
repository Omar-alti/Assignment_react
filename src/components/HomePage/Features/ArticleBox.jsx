import React from 'react'

function RenderPlusIcons() {
    const classes = ["plus1", "plus2", "plus3"];
    const plusDivs = [];
    for (let i = 0; i <= classes.length - 1; i++)
        plusDivs.push(<div key={i} className={classes[i]}><i className="fa-duotone fa-plus"></i></div>);
    return plusDivs;
}
const ArticleBox = ({ pic, title, paragraph }) => {
    return (
        <article className="features">
            <div className="plus-icon">
                {RenderPlusIcons()}
            </div>
            <img src={pic} alt="icon" />
            <h3 className="h-3">{title}</h3>
            <p>{paragraph}</p>
        </article>
    )
}

export default ArticleBox