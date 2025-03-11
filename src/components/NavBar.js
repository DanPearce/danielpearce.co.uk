import React from 'react'
import header from '../assets/DANPEARCE.png';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../styles/NavBar.module.css'

const navText = (
  <>
    <Navbar.Text className={styles.NavBarText}>
      Software Developer
    </Navbar.Text>
  </>
)

const NavBar = () => {
  return (
    <Navbar expand="lg" fixed="top" className={styles.NavBar}>
      <Container>
        <NavLink to='/'>
          <Navbar.Brand><img src={header} className={styles.Logo} alt="logo" /></Navbar.Brand>
        </NavLink>
        {navText}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-start">
            <NavLink to="/aboutme" className={styles.NavLink}><i class="fa-solid fa-address-card"></i> About Me</NavLink>
            <NavLink to="/projects" className={styles.NavLink}><i class="fa-solid fa-bars-progress"></i> Projects</NavLink>
            <NavLink to="/contact" className={styles.NavLink}><i class="fa-solid fa-envelope"></i> Contact</NavLink>
            <NavLink to="/resume" className={styles.NavLink}><i class="fa-solid fa-download"></i> Resume</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
  </Navbar>
  )
}

export default NavBar;