import React from 'react'
import { NavLink } from 'react-router-dom'

const MobileMenu = () => {
  return (
    <nav className="mobile-menu">
      <ul>
      <NavLink to="/"><li><i className="fa-regular fa-hand-back-point-right"></i>Home</li></NavLink>
      <NavLink to="*"><li><i className="fa-regular fa-hand-back-point-right"></i>Service</li></NavLink>
      <NavLink to="/News"><li><i className="fa-regular fa-hand-back-point-right"></i>News</li></NavLink>
      <NavLink to="/Contact"><li><i className="fa-regular fa-hand-back-point-right"></i>Contact</li></NavLink>
      </ul>
       
    </nav>
  )
}

export default MobileMenu