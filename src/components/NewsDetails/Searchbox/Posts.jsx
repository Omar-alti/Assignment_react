import React from 'react'

const Posts = ({date, title }) => {
    return (
        <>
            <div>
                <article>{title}</article>
                <p>{date}</p>
            </div>
        </>
    )
}

export default Posts