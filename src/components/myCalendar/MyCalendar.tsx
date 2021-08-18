import styles from './myCalendar.module.css';
import { stringOrDate } from "react-big-calendar";
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from 'react';
import MyToolbar from './myToolbar/MyToolbar';
import { NewEventList, NewDateEventList } from '../componentsType/componentsTypes';
import { action } from '../../redux/calendar-reducer';
import { AppStateType } from '../../redux/redux-store';
import { useDispatch, useSelector } from 'react-redux';
import CreateEventList from './createNewEventList/CreateEventListEventList';
import ChangeEventList from './changeEventList/ChangeEventList';

require('moment/locale/ru.js')

const MyCalendar = () => {
    const [newDateEvent, setNewDateEvent] = useState<NewDateEventList>({ newStart: Date(), newEnd: Date() });
    const [newCalendarId, setNewCalendarId] = useState<string>('');
    
    const myEventsList = useSelector<AppStateType, Array<NewEventList>>((state) => state.calendarPage.myEventsList);
    const searchDate = useSelector<AppStateType, stringOrDate>((state) => state.calendarPage.searchDate);
    const showCreateEventListModalView = useSelector<AppStateType, boolean>((state) => state.calendarPage.isShowCreateEventListModalView);
    const showChangeEventListModalView = useSelector<AppStateType, boolean>((state) => state.calendarPage.isShowChangeEventListModalView);
    
    const dispatch = useDispatch();
    
    const handleSelect = ({ start, end }: { start: stringOrDate, end: stringOrDate }) => {
        dispatch(action.isShowNewModalView(true))
        setNewDateEvent({ newStart: start, newEnd: end })
    }

    const getOldValue = (calendarEvent: string) => {
        dispatch(action.isShowCreateModalView(true));

        setNewCalendarId(calendarEvent)
    }

    const localizer = momentLocalizer(moment);

    return (
        <div className={showCreateEventListModalView || showChangeEventListModalView ? styles.wrapperBlackCalenadr : styles.wrapperCalendar}>
            <Calendar
                selectable
                localizer={localizer}
                events={myEventsList}
                views={{
                    month: true
                }}
                startAccessor="start"
                endAccessor="end"
                onNavigate={(dateNew) => dispatch(action.setSearchDate(dateNew))}
                date={searchDate}
                defaultView={Views.MONTH}
                className={styles.contentCalenadr}
                onSelectSlot={({ start, end }) => handleSelect({ start, end })}
                onSelectEvent={event => getOldValue(event.id)}
                components={{
                    toolbar: (props) => <MyToolbar {...props} />
                }}
            />
            {showCreateEventListModalView && <CreateEventList newDateEvent={newDateEvent} />}
            {showChangeEventListModalView && <ChangeEventList newCalendarId={newCalendarId} />}
        </div>
    );
}

export default MyCalendar;