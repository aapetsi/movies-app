import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from './video-camera.svg';

const Header = () => (
  <div>
    <Navbar bg="dark" variant="dark" expand="md">
      <Navbar.Brand>
        <img
          alt="app-logo"
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        {'   '}
        Movie App
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <LinkContainer to="/">
          <Button variant="link">Home</Button>
        </LinkContainer>
        <LinkContainer to="/browse">
          <Button variant="link">Browse Movies</Button>
        </LinkContainer>
        <LinkContainer to="/saved">
          <Button variant="link">Saved Movies</Button>
        </LinkContainer>
        <LinkContainer to="/watched">
          <Button variant="link">Already Watched</Button>
        </LinkContainer>
        <LinkContainer to="/login">
          <Button variant="link">Login</Button>
        </LinkContainer>
        <LinkContainer to="/logout">
          <Button variant="link">Logout</Button>
        </LinkContainer>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default Header;
