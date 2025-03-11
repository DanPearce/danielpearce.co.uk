import React from 'react'
import styles from '../styles/AboutMe.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import avatar from '../assets/avatar.jpg'

const AboutMe = () => {
  return (
    <Container className={styles.Container}>
      <Container className={styles.Content}>
        <Row>
        <Col lg={4} sm={12} className={styles.SkillsContainer}>
          <h1>About Me</h1>
            <img src={avatar} className={styles.Avatar} alt="avatar" />
            <Row className={styles.Skills}>
              <Col lg={12} sm={6} className={styles.SkillsLanguages}>
                <h3><i class="fa-solid fa-code"></i> Languages</h3>
                  <ul>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>jQuery</li>
                    <li>Python</li>
                    <li>Django</li>
                    <li>DRF</li>
                    <li>SQLite</li>
                    <li>CSS & HTML</li>
                  </ul>
              </Col>
              <Col lg={12} sm={6} className={styles.SkillsTechnical}>
                <h3><i class="fa-solid fa-microchip"></i> Technical</h3>
                  <ul>
                    <li>Microsoft Azure AD</li>
                    <li>Microsoft 365</li>
                    <li>Active Directory</li>
                    <li>Group Policy</li>
                    <li>Remote Desktop</li>
                    <li>Citrix & Citrix Director</li>
                    <li>iGel/UMS</li>
                    <li>Technical & Hands-on Support</li>
                    <li>Windows Builds 10/11 (including Autopilot)</li>
                    <li>Intune (Mac Builds & iOS via Intune)</li>
                    <li>DNS/DHCP</li>
                    <li>Teams</li>
                    <li>Avaya/3CX</li>
                    <li>Google Cloud</li>
                    <li>MFA/Hardtokens</li>
                    <li>Neat Meeting Rooms Installation</li>
                    <li>Desk Office Setup/Configuration</li>
                    <li>Service Now (SNOW)</li>
                  </ul>
              </Col>
            </Row>
          </Col>
          <Col lg={8} sm={12} className={styles.AboutMe}>
            <Container>
              <h3>My Software Development Journey:</h3>
              <strong>Diploma in Full Stack Software Development (Advanced Front End) from Code Institute</strong>
              <p>My journey into software development began with the Code Institute's Full Stack Software Development course, a highly regarded and comprehensive program that offers a deep dive into both front-end and back-end development. This self-taught program has empowered me to change my career and pursue my passion for software development.</p>
              <p>The hands-on projects and real-world scenarios provided by Code Institute have been instrumental in honing my technical skills and fostering a problem-solving mindset. I have consistently demonstrated my ability to think critically, innovate, and deliver high-quality software solutions. This program has inspired me to continuously learn and grow in the field of software development, and I am eager to take on new challenges and make a significant impact in this industry.</p>
            </Container>
            <Container class='mt-4'>
              <h3>Current Position:</h3>
                <strong>Application Support Analyst at Computershare Technology Services, UK</strong>
                <p>As an Application Support Analyst, I excel in delivering exceptional support for a variety of business applications, swiftly resolving software-related issues and ensuring optimal performance and stability. Beyond my role, I am deeply passionate about software development and continually seek to expand my knowledge in this dynamic field. My expertise in troubleshooting complex technical problems is unparalleled, and I thrive in configuring, maintaining, and updating application systems to meet the unique needs of businesses. I am dedicated to onboarding new users, handling installations and configurations of necessary applications, and providing comprehensive training.</p>
                <p>My commitment to continuous learning drives me to explore innovative solutions and stay up to date with the latest trends in software development. My background in full stack development has equipped me with a strong foundation in both front-end and back-end technologies, enabling me to create robust and scalable applications.</p>
            </Container>
            <Container class='mt-4'>
              <h3>Other IT Professional Experience:</h3>
                <strong>Computershare - Site Support Technician</strong>
                  <ul>
                    <li>Delivered on-site support for software and hardware issues with 2nd/3rd line coverage</li>
                    <li>Facilitated effective communication between teams to resolve issues efficiently</li>
                    <li>Supported and maintained on-site technology equipment, systems, and IT assets</li>
                    <li>Provided on-site support locally and globally, demonstrating a commitment to international travel for business needs</li>
                    <li>Troubleshot issues in AD/Azure AD, Windows 10/11 builds (including Autopilot), and maintained switches/networking</li>
                    <li>Managed firmware rollouts to the Thin Client estate using iGel/UMS</li>
                  </ul>
                <strong>Impact IT Solutions - Service Desk Support</strong>
                  <ul>
                    <li>Provided 1st/2nd line technical support for IT systems and devices, ensuring prompt resolution</li>
                    <li>Developed and maintained documentation to enhance team efficiency and knowledge sharing</li>
                    <li>Managed account creation and troubleshooting in AD/Azure AD, Windows 10/11 builds (including Autopilot)</li>
                  </ul>
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default AboutMe