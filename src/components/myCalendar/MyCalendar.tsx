import styles from './myCalendar.module.css';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from 'react';
import MyToolbar from './myToolbar/MyToolbar';
import { NewEventList } from '../componentsType/componentsTypes';
import { action } from '../../redux/calendar-reducer';
import { AppStateType } from '../../redux/redux-store';
import { useDispatch, useSelector } from 'react-redux';
import AddNewEventList from './addNewEventList/AddNewEventList';
import CreateEventList from './createEventList/CreateEventList';

require('moment/locale/ru.js')

const MyCalendar = () => {
    const [newDateEvent, setNewDateEvent] = useState<NewEventList>({ newStart: Date(), newEnd: Date() });
    const [oldTitle, setOldTitle] = useState<string | undefined>('');
    const myEventsList = useSelector<AppStateType, Array<NewEventList>>((state) => state.calendarPage.myEventsList);
    const showNewModalView = useSelector<AppStateType, boolean>((state) => state.calendarPage.isShowNewModalView);
    const showCreateModalView = useSelector<AppStateType, boolean>((state) => state.calendarPage.isShowCreateModalView);
    const dispatch = useDispatch();



    const handleSelect = ({ start, end }: NewEventList) => {
        dispatch(action.isShowNewModalView(true))
        setNewDateEvent({ newStart: start, newEnd: end })
    }

    const getOldValue = (title: string | undefined) => {
        dispatch(action.isShowCreateModalView(true));
        setOldTitle(title)
    }

    const localizer = momentLocalizer(moment);

    return (
        <div className={!showNewModalView ? styles.wrapperCalendar : styles.wrapperBlackCalenadr}>
            <Calendar
                selectable
                localizer={localizer}
                events={myEventsList}
                views={{
                    month: true
                }}
                startAccessor="start"
                endAccessor="end"
                defaultView={Views.MONTH}
                className={styles.contentCalenadr}
                onSelectSlot={({ start, end }) => handleSelect({ start, end })}
                onSelectEvent={event => getOldValue(event.title)}
                components={{
                    toolbar: (props) => <MyToolbar {...props} />
                }}
            />
            {showNewModalView && <AddNewEventList newDateEvent={newDateEvent} />}
            {showCreateModalView && <CreateEventList oldTitle={oldTitle} />}
        </div>
    );
}

export default MyCalendar;