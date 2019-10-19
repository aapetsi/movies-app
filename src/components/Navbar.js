import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar as Nav } from 'react-bootstrap';
import logo from './video-camera.svg';

const Navbar = () => (
  <div>
    <Nav bg="dark" variant="dark" expand="lg">
      <Nav.Brand>
        <img
          alt="app-logo"
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        {'   '}
        Movie App
      </Nav.Brand>
    </Nav>
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
