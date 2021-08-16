import { useDispatch } from 'react-redux';
import styles from './profile.module.css';
import { action } from '../../redux/autarization-reducer';
import { useHistory } from 'react-router-dom';

const Profile = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const exitProfile = () => {
        dispatch(action.setLogin(false));
        history.push('/')
    }
    return (
        <div className={styles.wrapperProfile}>
         <button onClick={() => exitProfile()}>выход</button>
         </div>
    );
}

export default Profile;