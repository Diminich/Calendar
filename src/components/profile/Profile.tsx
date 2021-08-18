import { useDispatch, useSelector } from 'react-redux';
import styles from './profile.module.css';
import { action } from '../../redux/autarization-reducer';
import { useHistory } from 'react-router-dom';
import { AppStateType } from '../../redux/redux-store';
import { NewEventList } from '../componentsType/componentsTypes';
import { User } from '../../redux/reducersTypes/reducersTypes';

const Profile = () => {
    const informationUser = useSelector<AppStateType, User>((state) => state.autarizationPage.user);
    const myEventsList = useSelector<AppStateType, Array<NewEventList>>((state) => state.calendarPage.myEventsList);
    const dispatch = useDispatch();
    const history = useHistory();
    const exitProfile = () => {
        dispatch(action.setLogin(false));
        history.push('/')
    }
    return (
        <div className={styles.wrapperProfile}>
            <div className={styles.contentProfile}>
                <div className={styles.wrapperExitButton}>
                    <button className={styles.exitButton} onClick={() => exitProfile()}>Выйти из аккаунта</button>
                </div>
                <span style={{margin: '10px 0px 10px 0px'}}>Информация о пользователе</span>
                <div className={styles.wrapperInformationUser}>
                    <div className={styles.informationUser}>
                        <span>Имя: {informationUser.name}</span>
                        <span>Возраст: {informationUser.age}</span>
                        <span>язык: {informationUser.language}</span>
                        <span>email: {informationUser.email}</span>
                    </div>
                </div>
                <div style={{marginTop: 10}}>Мои заметки</div>
                <ul className={styles.myEventsList}>
                    {myEventsList.map(({ id, title }) => {
                        return (
                            <li key={id}>{title}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Profile;