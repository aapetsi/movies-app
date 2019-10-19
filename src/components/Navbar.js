import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div>
    <NavLink to="/">
      <h1>Movie App</h1>
    </NavLink>
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
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/logout">Logout</NavLink>
      </li>
    </ul>
  </div>
);

export default Navbar;
