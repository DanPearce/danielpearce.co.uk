import React from 'react'
import ContactForm from '../components/ContactForm'
import Container from 'react-bootstrap/Container'
import styles from '../styles/Contact.module.css'

const Contact = () => {
  return (
    <Container className={styles.Container}>
      <h1>Contact Me</h1>
      <ContactForm />
    </Container>
  )
}

export default Contact