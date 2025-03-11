import React from 'react'
import header from '../assets/DANPEARCE.png';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../styles/NavBar.module.css'

const NavBar = () => {
  return (
    <Navbar expand="lg" fixed="top" className={styles.NavBar}>
      <Container>
        <NavLink to='/' className={styles.NavLink}>
          <Navbar.Brand className={styles.Logo}><img src={header} className={styles.Logo} alt="logo" /></Navbar.Brand>
        </NavLink>
      
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-start">
            <NavLink href="#link"><i class="fa-solid fa-square-h"></i></NavLink>
            <NavLink href="#link"><i class="fa-solid fa-plus"></i> Projects</NavLink>
            <NavLink href="#link"><i class="fa-solid fa-check"></i> About Me</NavLink>
            <NavLink href="#link"><i class="fa-solid fa-magnifying-glass"></i> Contact</NavLink>
            <NavLink href="#link"><i class="fa-solid fa-house-user"></i> Resume</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
  </Navbar>
  )
}

export default NavBar;