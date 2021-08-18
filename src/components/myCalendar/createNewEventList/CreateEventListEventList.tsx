import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { action } from '../../../redux/calendar-reducer';
import { NewDateEventList } from '../../componentsType/componentsTypes';
import styles from './createEventListProps.module.css';

interface CreateEventListProps {
    newDateEvent: NewDateEventList
}

const CreateEventList = ({ newDateEvent }: CreateEventListProps) => {
    const dispatch = useDispatch();
    const [error, setError] = useState(false);
    const [newTitleEvent, setTitleEvent] = useState('');

    const saveNewTitleEvent = () => {
        if (newTitleEvent !== '') {
            setError(false)
            dispatch(action.isShowNewModalView(false))
            dispatch(action.setNewEventList({ start: newDateEvent.newStart, end: newDateEvent.newEnd, title: newTitleEvent, id: Date.now().toString() }))
            setTitleEvent('')
        } else {
            setError(true)
        }
    }

    const clouseNewTitleEvent = () => {
        dispatch(action.isShowNewModalView(false))
        setTitleEvent('')
    }

    return (
        <div className={styles.wrapperCreateEventList}>
            <input className={styles.input} value={newTitleEvent} onChange={(e) => setTitleEvent(e.currentTarget.value)} placeholder='Добавить' />
            {error ? <span style={{ color: 'red' }}>Введите символ</span> : <div style={{ marginTop: 22 }} />}
            <button className={styles.button} onClick={() => saveNewTitleEvent()}>Добавить</button>
            <button className={styles.button} onClick={() => clouseNewTitleEvent()}>Закрыть</button>
        </div>
    )
}

export default CreateEventList;