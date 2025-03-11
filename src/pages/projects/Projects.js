import React from 'react'
import styles from '../../styles/Projects.module.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import nexus from '../../assets/nexus.png'
import nexus_drf from '../../assets/nexus_drf.png'
import theforum from '../../assets/tf.png'
import battleships from '../../assets/BS.png'
import coding_challenge from '../../assets/CCQ.png'
import kathy_cakes from '../..//assets/kc.png'
import { NavLink } from 'react-router-dom'

const Projects = () => {
  return (
    <Container className={styles.Container}>
      <Container className={styles.Content}>
        <Row className={styles.ProjectRow}>
        <Col lg={6} sm={12}>
          <NavLink to='https://ci-pp5-nexus-danpearce.herokuapp.com/' target="_blank">
            <img src={nexus} className={styles.Avatar} alt="avatar" />
          </NavLink>
        </Col>
        <Col lg={6} sm={12}>
          <NavLink to='https://ci-pp5-nexus-danpearce.herokuapp.com/' target="_blank">
            <h3>Nexus</h3>
          </NavLink>
          <p>Nexus is a sophisticated social network inspired by Instagram, developed using React. The platform enables users to share images, create posts, and engage with others, creating a dynamic and interactive online community. Essential features include user authentication, image uploads, comments, likes, and the ability to follow other users, delivering a comprehensive social media experience. This project highlights my expertise in front-end development, showcasing my skills in React and my ability to craft visually appealing and user-friendly web applications. It also reflects my proficiency in building scalable and interactive platforms, emphasizing the importance of a seamless user experience.</p>
          <p>In addition to the front-end, Nexus boasts a robust backend for data storage and retrieval, ensuring efficient and secure operations. The design focuses on modularity and maintainability, demonstrating my commitment to best practices in software development. Overall, Nexus illustrates my capability to tackle complex projects by blending creativity and technical prowess to produce a polished and functional social network. This project serves as a valuable addition to my portfolio, underscoring my skills and dedication to continuous learning in the ever-evolving field of software development.</p>
        </Col>
        </Row>
        <Row className={styles.ProjectRow}>
        <Col lg={6} sm={6}>
          <NavLink to='https://ci-pp5-nexus-drf-danpearce.herokuapp.com/' target="_blank">
            <h3>Nexus Backend </h3>
          </NavLink>
          <p>Nexus Backend, developed using Django REST Framework (DRF), lays the foundation for the Nexus social network's backend infrastructure. This project supports the front-end features with functionalities such as user authentication, image uploads, posts, comments, likes, and user following capabilities. This initiative showcases my proficiency in backend development, highlighting my skills in Django and Django REST Framework. It demonstrates my ability to design and implement scalable and efficient APIs that integrate seamlessly with front-end applications. The backend architecture prioritizes security, data integrity, and performance, ensuring a reliable and responsive user experience.</p>
          <p>Beyond core functionalities, the project includes automated testing, documentation, and deployment configurations. These elements reflect my adherence to best practices in software development, emphasizing thorough testing, clear documentation, and smooth deployment processes. In summary, the Nexus Backend project exemplifies my aptitude for tackling complex backend challenges and delivering high-quality solutions. It stands as an excellent addition to my portfolio, showcasing my expertise in backend technologies and my commitment to continuous learning in the ever-evolving field of software development.</p>
        </Col>
        <Col lg={6} sm={6}>
          <NavLink to='https://ci-pp5-nexus-drf-danpearce.herokuapp.com/' target="_blank">
            <img src={nexus_drf} className={styles.Avatar} alt="avatar" />
          </NavLink>
        </Col>
        </Row>
        <Row className={styles.ProjectRow}>
          <Col lg={6} sm={6}>
            <NavLink to='https://ci-pp4-theforum-danpearce.herokuapp.com' target="_blank">
              <img src={theforum} className={styles.Avatar} alt="avatar" />
            </NavLink>
          </Col>
          <Col lg={6} sm={6}>
            <NavLink to='https://ci-pp4-theforum-danpearce.herokuapp.com/' target="_blank">
              <h3>The Forum</h3>
            </NavLink>
            <p>The Forum is an advanced community discussion platform developed using Django. This project fosters user engagement through features like thread creation, commenting, upvoting, and user authentication. The Forum aims to create a robust environment where users can exchange ideas, ask questions, and participate in discussions on various topics. This platform highlights my expertise in full-stack development, with a particular focus on backend development using Django and front-end integration. It demonstrates my ability to create scalable, secure, and user-friendly web applications. The Forum's architecture emphasizes data integrity, security, and performance, ensuring a seamless and reliable user experience.</p>
            <p>In addition to core features, the project incorporates automated testing, comprehensive documentation, and deployment configurations. These elements reflect my commitment to best practices in software development, including thorough testing, clear documentation, and efficient deployment processes. Ultimately, The Forum exemplifies my ability to address complex development challenges and deliver high-quality solutions. It serves as a valuable addition to my portfolio, showcasing my skills in both frontend and backend technologies and my dedication to continuous learning in the ever-evolving field of software development.</p>
          </Col>
        </Row>
        <Row className={styles.ProjectRow}>
          <Col lg={6} sm={6}>
            <NavLink to='https://ci-pp3-battleships-danpearce.herokuapp.com/' target="_blank">
              <h3>Battleships</h3>
            </NavLink>
            <p>Battleships is a strategic, turn-based game developed using Python. The project emulates the classic board game, allowing players to engage in a tactical battle where the objective is to sink the opponent's fleet of ships. The game features a command-line interface, making it easily accessible and straightforward to play. This project highlights my proficiency in Python programming, emphasizing my ability to implement game logic and create an engaging user experience. It showcases my expertise in designing and developing interactive applications, with a strong focus on clean code, modularity, and maintainability.</p>
            <p>Alongside core gameplay mechanics, the project includes features such as error handling, input validation, and various gameplay options. These aspects demonstrate my commitment to best practices in software development, ensuring a robust and reliable application. Overall, Battleships illustrates my capability to address complex programming challenges and deliver high-quality solutions. It serves as a valuable addition to my portfolio, showcasing my skills in Python and my dedication to continuous learning in the ever-evolving field of software development.</p>
          </Col>
          <Col lg={6} sm={6}>
            <NavLink to='https://ci-pp3-battleships-danpearce.herokuapp.com/' target="_blank">
              <img src={battleships} className={styles.Avatar} alt="avatar" />
            </NavLink>
          </Col>
        </Row>
        <Row className={styles.ProjectRow}>
          <Col lg={6} sm={6}>
            <NavLink to='https://danpearce.github.io/CI_PP2_Coding_Challenge_Quiz/index.html' target="_blank">
              <img src={coding_challenge} className={styles.Avatar} alt="avatar" />
            </NavLink>
          </Col>
          <Col lg={6} sm={6}>
            <NavLink to='https://danpearce.github.io/CI_PP2_Coding_Challenge_Quiz/index.html' target="_blank">
              <h3>Coding Challenge Quiz</h3>
            </NavLink>
            <p>Coding Challenge Quiz is an interactive quiz application developed using HTML, CSS, and JavaScript. The project aims to test users' knowledge of programming concepts through a series of multiple-choice questions. The quiz dynamically adjusts to the user's responses, providing immediate feedback and displaying the correct answers. This initiative highlights my proficiency in front-end web development, showcasing my skills in HTML, CSS, and JavaScript. It demonstrates my ability to create engaging and interactive web applications that offer a seamless user experience. The Coding Challenge Quiz emphasizes clean design, responsiveness, and accessibility, ensuring it is user-friendly across different devices and screen sizes.</p>
            <p>Beyond the core quiz functionality, the project includes features such as score tracking, a timer, and customizable question sets. These elements reflect my adherence to best practices in web development, ensuring a robust and enjoyable user experience. In summary, the Coding Challenge Quiz exemplifies my aptitude for addressing complex programming challenges and delivering high-quality solutions. It serves as an excellent addition to my portfolio, showcasing my skills in front-end technologies and my commitment to continuous learning in the ever-evolving field of software development.</p>
          </Col>
        </Row>
        <Row className={styles.ProjectRow}>
          <Col lg={6} sm={6}>
            <NavLink to='https://danpearce.github.io/CI_PP1_KathyCakes/' target="_blank">
              <h3>Kathy Cakes </h3>
            </NavLink>
            <p>Kathy Cakes is an e-commerce website developed using HTML, CSS, and JavaScript, designed for a fictional bakery. The project provides a user-friendly platform for customers to browse and purchase a variety of baked goods. Key features include a product catalogue, shopping cart functionality, and a streamlined checkout process, ensuring a seamless shopping experience. This project highlights my proficiency in front-end web development, showcasing my skills in HTML, CSS, and JavaScript. It demonstrates my ability to create visually appealing and responsive web applications that cater to user needs. Kathy Cakes emphasizes clean design, ease of navigation, and accessibility, ensuring it is user-friendly across different devices and screen sizes.</p>
            <p>In addition to the core e-commerce functionalities, the project incorporates features such as product filtering, search capabilities, and user authentication. These elements reflect my commitment to best practices in web development, ensuring a robust and secure application. Ultimately, Kathy Cakes exemplifies my capability to address complex development challenges and deliver high-quality solutions. It serves as an excellent addition to my portfolio, showcasing my skills in front-end technologies and my dedication to continuous learning in the ever-evolving field of software development.</p>
          </Col>
          <Col lg={6} sm={6}>
            <NavLink to='https://danpearce.github.io/CI_PP1_KathyCakes/' target="_blank">
              <img src={kathy_cakes} className={styles.Avatar} alt="avatar" />
            </NavLink>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects