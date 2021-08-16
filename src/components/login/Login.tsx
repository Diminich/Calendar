import { useDispatch } from 'react-redux';
import { action } from '../../redux/autarization-reducer';
import { useForm, SubmitHandler } from "react-hook-form";
import styles from './login.module.css';
import { useHistory } from 'react-router-dom';
import { InitialValuesLogin } from '../componentsType/componentsTypes';

const Login = () => {
    const dispatch = useDispatch();
    let history = useHistory();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<InitialValuesLogin>();

    const onSubmit: SubmitHandler<InitialValuesLogin> = () => {
        dispatch(action.setLogin(true))
        history.push('/profile')
    };

    return (
        <div className={styles.wrapperLogin}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.wrapperForm}>
                <span style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 30 }}>Member Login</span>
                <div className={styles.wrapperInputLogin}>
                    <input {...register('loginUser', { required: true, validate: { loginUser: str => str === 'Admin' } })}
                        defaultValue='Admin' placeholder='login' className={styles.inputs} />
                    <input {...register('passwordUser', { required: true, validate: { passwordUser: str => str === '12345678' } })}
                        defaultValue='12345678' placeholder='password' type='password' className={styles.inputs} />
                    {errors.passwordUser || errors.loginUser
                        ? <span style={{ color: 'red' }}>Имя пользователя или пароль введены неверно</span>
                        : <div style={{ marginTop: 22 }} />}
                </div>
                <button type='submit' className={styles.buttonLogin}>Войти</button>
            </form>
        </div>
    );
}

export default Login;