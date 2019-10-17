import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul className="navbar">
        <li className="nav-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/browse">Browse Movies</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/saved">Saved Movies</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/watched">Already Watched</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
