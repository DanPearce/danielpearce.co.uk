import React from 'react'
import styles from '../styles/LandingPage.module.css'
import avatar from '../assets/avatar.jpeg'
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';

const typeText = (
  <>
      <img src="https://readme-typing-svg.herokuapp.com?font=Space+Grotesk&weight=600&size=40&pause=1000&color=153943&center=true&vCenter=true&lines=Hello, World!" alt="Typing SVG" />
  </>
)

const LandingPage = () => {
  return (
    <Container className={styles.Container}>
      <NavLink to='/aboutme'>
          <img src={avatar} className={styles.Avatar} alt="avatar" />
      </NavLink>
      <Container className={styles.Content}>
        {typeText}
        <Container className={styles.Socials}>
          <NavLink to="https://www.linkedin.com/in/danielanthonypearce/" target="_blank"><i class="fa-brands fa-linkedin"></i></NavLink>
          <NavLink to="https://github.com/DanPearce/" target="_blank"><i class="fa-brands fa-square-github"></i></NavLink>
          <NavLink to="https://x.com/danthonypearce/" target="_blank"><i class="fa-brands fa-square-x-twitter"></i></NavLink>
        </Container>
      </Container>
    </Container>
  )
}

export default LandingPage