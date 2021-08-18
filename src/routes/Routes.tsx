// import styles from '../';
import styles from '../App.module.css'
import { Redirect, Route, Switch } from "react-router-dom";
import Login from '../components/login/Login';
import Profile from '../components/profile/Profile';
import Info from '../components/info/Info';
import MyCalendar from '../components/myCalendar/MyCalendar';
import Main from '../components/main/Main';
import { useSelector } from "react-redux";
import { AppStateType } from "../redux/redux-store";

const Routes = () => {
    const isLogin = useSelector<AppStateType, boolean>((state) => state.autarizationPage.isLogin);

    return (
        <Switch>
            <Route exact path='/' render={() => <Main />} />
            <Route exact path='/login' render={() => <Login />} />
            <Route exact path='/info' render={() => <Info />} />
            <Route exact path='/calendar' render={() => <MyCalendar />} />
            {isLogin ? <Route exact path='/profile' render={() => <Profile />} /> : <Redirect to={'/login'} />}
            <Route path={'/404'} render={() => <div className={styles.notFound}>404 NOT FOUND</div>} />
            <Redirect from={'*'} to={'/404'} />
        </Switch>
    );
}

export default Routes;