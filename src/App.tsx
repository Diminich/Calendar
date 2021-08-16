import styles from './App.module.css';
import { Redirect, Route, Switch } from "react-router-dom";
import { useSelector } from 'react-redux';
import { AppStateType } from './redux/redux-store';
import Header from './components/header/Header';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';
import Info from './components/info/Info';
import MyCalendar from './components/myCalendar/MyCalendar';

const App = () => {
  const isLogin = useSelector<AppStateType, boolean>((state) => state.autarizationPage.isLogin);

  return (
    <div className={styles.wrapper}>
      <Header isLogin={isLogin} />
      <Switch>
        <Route exact path='/' render={() => <div />} />
        <Route exact path='/login' render={() => <Login />} />
        <Route exact path='/info' render={() => <Info />} />
        <Route exact path='/calendar' render={() => <MyCalendar />} />
        {isLogin ? <Route exact path='/profile' render={() => <Profile />} /> : <Redirect to={'/login'} />}
        <Route path={'/404'} render={() => <div className={styles.notFound}>404 NOT FOUND</div>} />
        <Redirect from={'*'} to={'/404'} />
      </Switch>
    </div>
  );
}

export default App;
