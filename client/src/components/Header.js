import React from 'react'
import { Navbar, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import LogoSvg from './video-camera.svg'

const Header = () => (
  <header>
    <Navbar bg="dark" variant="dark" expand="md">
      <Navbar.Brand>
        <LogoSvg width="30" height="30" className="d-inline-block align-top" />
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
        <LinkContainer to="/register">
          <Button variant="link">Register</Button>
        </LinkContainer>
        <LinkContainer to="/login">
          <Button variant="link">Login</Button>
        </LinkContainer>
        <LinkContainer to="/logout">
          <Button variant="link">Logout</Button>
        </LinkContainer>
      </Navbar.Collapse>
    </Navbar>
  </header>
)

export default Header
