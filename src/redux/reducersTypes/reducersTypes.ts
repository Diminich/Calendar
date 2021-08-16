import { NewEventList } from "../../components/componentsType/componentsTypes";

export type InitialStateAutarizationType = {
  isLogin: boolean;
};

export type InitialStateCalendarType = {
  myEventsList: Array<NewEventList>;
  isShowCreateEventListModalView: boolean;
  isShowChangeEventListModalView: boolean;
};

export type SetCreateTitleCalendar = {
  createTitleEvent: string
  newCalendarId: string
}