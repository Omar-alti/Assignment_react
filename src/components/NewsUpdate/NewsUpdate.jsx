import React from 'react'
import Lines from '../../assets/images/updates by signup-lines.svg'
import Button from '../Generics/Buttons'

const NewsUpdate = () => {
    return (
        <section className="news-updates">
            <img className="section-nine-lines" src={Lines} alt="lines" />
            <div className="container section-title">
                <h2>Get News Updates By Signup</h2>
                <div className="subscribe-box">
                    <form className="mail-window">
                        <input type="text" placeholder="username@domain.com" />
                    </form>
                    <div className="button"><Button type="Yellow" url="/" text="Subscribe" symbol="fa-regular fa-arrow-up-right" /></div>
                </div>
            </div>
        </section>
    )
}
export default NewsUpdate