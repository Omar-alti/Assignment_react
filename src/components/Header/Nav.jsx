import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../Generics/Buttons'

const Nav = () => {
    return (
        <>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Services">Service</NavLink>
                <NavLink to="/News">News</NavLink>
                <NavLink to="/Contact">Contact</NavLink>
            </nav>
            <Button type="yellow" url="/" text="Login" symbol="fa-regular fa-arrow-up-right" />
        </>
    )
}

export default Nav