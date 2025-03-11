import header from './assets/DANPEARCE.png';
import styles from './styles/App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <header>
        <img src={header} className={styles.Logo} alt="logo" />
      </header>
    </div>
  );
}

export default App;
