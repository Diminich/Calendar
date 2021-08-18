import { useHistory } from 'react-router';

import styles from './main.module.css'

const Main = () => {
    let history = useHistory();
    
    return (
        <div className={styles.wrapperMain}>
            <div className={styles.contentMain}>
                <span className={styles.header}>Добро пожаловать!</span>
                <span className={styles.text}>
                    Для того чтобы больше узнать больше перейдите во вкладку Информация.
                    Для перехода в свой профиль перейдите нажмя по кнопку. 
                </span>
                <button className={styles.buttonAutarization} onClick={() => history.push('/profile')}>Перейти в профиль</button>
            </div>
        </div>
    )
}

export default Main;