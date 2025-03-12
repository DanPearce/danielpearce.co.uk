import React from 'react'
import header from '../assets/DANPEARCE.png';
import { NavLink } from 'react-router-dom';
import useClickOutsideToggle from '../hooks/useClickOutsideToggle';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../styles/NavBar.module.css'

const navText = (
  <>
    <Navbar.Text className={styles.NavBarText}>
      <h5>Software Developer</h5>
    </Navbar.Text>
  </>
)

const NavBar = () => {
  const { expanded, setExpanded, ref} = useClickOutsideToggle();
  return (
    <Navbar expand="lg" fixed="top" className={styles.NavBar} expanded={expanded}>
      <Container>
        <NavLink to='/'>
          <Navbar.Brand><img src={header} className={styles.Logo} alt="logo" /></Navbar.Brand>
        </NavLink>
        {navText}
        <Navbar.Toggle className={styles.Toggle} aria-controls="basic-navbar-nav" ref={ref} onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-start">
            <NavLink to="/aboutme" className={styles.NavLink}><i class="fa-solid fa-address-card"></i> About Me</NavLink>
            <NavLink to="/projects" className={styles.NavLink}><i class="fa-solid fa-bars-progress"></i> Projects</NavLink>
            <NavLink to="/contact" className={styles.NavLink}><i class="fa-solid fa-envelope"></i> Contact</NavLink>
            <Link to="src/assets/dan-pearce-cv.pdf" target="_blank" download className={styles.NavLink}><i class="fa-solid fa-download"></i></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
  </Navbar>
  )
}

export default NavBar;