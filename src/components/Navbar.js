import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/browse">Browse Movies</NavLink>
        </li>
        <li>
          <NavLink to="/saved">Saved Movies</NavLink>
        </li>
        <li>
          <NavLink to="/watched">Already Watched</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
