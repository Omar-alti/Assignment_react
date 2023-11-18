import React from 'react'
import Button from '../Generics/Buttons'

const PageNotFound = () => {
    return (
        <div>
            <div className="container">
                <div className="not-found">
                    <h2>sorry couldn't find the page you were looking for</h2>
                    <Button type="black" text="Back to homepage" url="/" symbol="fa-regular fa-arrow-up-right" />
                </div>
            </div>
        </div>
    )
}

export default PageNotFound