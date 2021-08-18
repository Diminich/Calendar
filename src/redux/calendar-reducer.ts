import { stringOrDate } from 'react-big-calendar';
import { NewEventList } from './../components/componentsType/componentsTypes';
import { InitialStateCalendarType, SetCreateTitleCalendar } from './reducersTypes/reducersTypes';
import { InferActionTypes } from "./redux-store";

const SET_NEW_EVENT_LIST = 'SET_NEW_EVENT_LIST';
const IS_SHOW_NEW_MODAL_VIEW = 'IS_SHOW_NEW_MODAL_VIEW';
const IS_SHOW_CREATE_MODAL_VIEW = 'IS_SHOW_CREATE_MODAL_VIEW';
const CREATE_TITLE = 'CREATE_TITLE';
const SEARCH_DATE = 'SEARCH_DATE';

const initialState: InitialStateCalendarType = {
    myEventsList: [{
        id: '1',
        title: 'Встреча с Дашей',
        start: new Date(2021, 6, 7),
        end: new Date(2021, 6, 10),
      },
      {
        id: '2',
        title: 'Сходить в магазин',
        start: new Date(2021, 7, 11),
        end: new Date(2021, 7, 14),
      },
      {
        id: '3',
        title: 'Идти в баню',
        start: new Date(2021, 5, 15),
        end: new Date(2021, 5, 18),
      }],
    searchDate: new Date(),
    isShowCreateEventListModalView: false,
    isShowChangeEventListModalView: false
};

type InitialStateType = typeof initialState
type ActionTypes = InferActionTypes<typeof action>;

    

const calendarReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case SET_NEW_EVENT_LIST:
            return {
                ...state,
                myEventsList: [...state.myEventsList, {start: action.newEventList.start, end: action.newEventList.end, title: action.newEventList.title, id: action.newEventList.id}]
            };

        case SEARCH_DATE:
            return {
                ...state,
                searchDate: action.searchDate
            };

        case IS_SHOW_NEW_MODAL_VIEW:
            return {
                ...state,
                isShowCreateEventListModalView: action.setShowNewModalView
            };

        case IS_SHOW_CREATE_MODAL_VIEW:
            return {
                ...state,
                isShowChangeEventListModalView: action.setShowCreateModalView
            };

        case CREATE_TITLE:
            return {
                ...state,
                myEventsList: state.myEventsList.map((item) => {
                    if (item.id === action.setCreateTitle.newCalendarId) {
                        item.title = action.setCreateTitle.createTitleEvent
                        return item
                    }
                    return item
                })
            };

        default:
            return state;
    }
};

export const action = {
    setNewEventList: (newEventList: NewEventList) => ({
        type: SET_NEW_EVENT_LIST,
        newEventList
    } as const),

    setSearchDate: (searchDate: stringOrDate) => ({
        type: SEARCH_DATE,
        searchDate
    } as const),

    isShowNewModalView: (setShowNewModalView: boolean) => ({
        type: IS_SHOW_NEW_MODAL_VIEW,
        setShowNewModalView
    } as const),

    isShowCreateModalView: (setShowCreateModalView: boolean) => ({
        type: IS_SHOW_CREATE_MODAL_VIEW,
        setShowCreateModalView
    } as const),

    setCreateTitle: (setCreateTitle: SetCreateTitleCalendar) => ({
        type: CREATE_TITLE,
        setCreateTitle
    } as const)
}

export default calendarReducer;