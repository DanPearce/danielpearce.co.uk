import styles from './styles/App.module.css';
import Container from 'react-bootstrap/Container';
import NavBar from './components/NavBar';
import { Routes, Route} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Projects from './pages/projects/Projects';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
        <Container>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/aboutme' element={<AboutMe />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/resume' element={<Resume />} />
          </Routes>
        </Container>
    </div>
  );
}

export default App;
