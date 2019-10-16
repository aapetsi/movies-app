import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/browse">Browse Movies</NavLink>
      <NavLink to="/saved">Saved Movies</NavLink>
      <NavLink to="/watched">Already Watched</NavLink>
    </div>
  )
}

export default Navbar
