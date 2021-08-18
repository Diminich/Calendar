import styles from './App.module.css';
import { useSelector } from 'react-redux';
import { AppStateType } from './redux/redux-store';
import Header from './components/header/Header';
import Routes from './routes/Routes';


const App = () => {
  const isLogin = useSelector<AppStateType, boolean>((state) => state.autarizationPage.isLogin);

  return (
    <div className={styles.wrapper}>
      <Header isLogin={isLogin} />
      <Routes />
    </div>
  );
}

export default App;
