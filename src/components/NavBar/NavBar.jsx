import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './NavBar.css'
import logo from '../../assets/logo.png'
import CartWidget from './CartWidget'
import { NavLink, Link } from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'

const NavBar = () => {
  return (
    <>
      <Navbar sticky="top" bg="white" expand="lg">
        <LinkContainer to="/">
          <Navbar.Brand><img src={logo} alt="Home"/></Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav className="mr-sm-2">
          <NavLink to={`/productos`}>PRODUCTOS</NavLink>
          <NavDropdown id="basic-nav-dropdown">
            <LinkContainer to="/productos">
              <NavDropdown.Item>PRODUCTOS</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Divider />
            <LinkContainer to="/productos/joystick">
              <NavDropdown.Item>JOYSTICKS</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/productos/auricular">
              <NavDropdown.Item>AURICULARES</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/productos/teclado">
              <NavDropdown.Item>TECLADOS</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
          <NavLink to={`/servicios`}>SERVICIOS</NavLink>
          <NavLink to={`/contacto`}>CONTACTO</NavLink>
          <NavLink to={`/carrito`}><CartWidget/></NavLink>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default NavBar

