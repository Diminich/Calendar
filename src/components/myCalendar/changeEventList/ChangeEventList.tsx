import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { action } from '../../../redux/calendar-reducer';
import styles from './createEventList.module.css';

interface CreateEventListProps {
    newCalendarId: string
}

const ChangeEventList = ({ newCalendarId }: CreateEventListProps) => {
    const dispatch = useDispatch();
    const [error, setError] = useState(false);


    const [createTitleEvent, setCreateTitleEvent] = useState('')

    const saveNewTitleEvent = () => {
        if (createTitleEvent !== '') {
            setError(false)
            dispatch(action.setCreateTitle({ createTitleEvent, newCalendarId }))
            dispatch(action.isShowCreateModalView(false))
            setCreateTitleEvent('')
        } else {
            setError(true)
        }
    }

    const clouseNewTitleEvent = () => {
        dispatch(action.isShowCreateModalView(false))
        setCreateTitleEvent('')
    }

    return (
        <div className={styles.wrapperChangeEventList}>
            <input className={styles.input} value={createTitleEvent} onChange={(e) => setCreateTitleEvent(e.currentTarget.value)} placeholder='Изменить' />
            {error ? <span style={{ color: 'red' }}>Введите символ</span> : <div style={{ marginTop: 22 }} />}
            <button className={styles.button} onClick={() => saveNewTitleEvent()}>Изменить</button>
            <button className={styles.button} onClick={() => clouseNewTitleEvent()}>Закрыть</button>
        </div>
    )
}

export default ChangeEventList;