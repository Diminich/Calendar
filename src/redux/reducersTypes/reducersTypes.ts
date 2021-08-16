import { NewEventList } from "../../components/componentsType/componentsTypes";

export type InitialStateAutarizationType = {
  isLogin: boolean;
};

export type InitialStateCalendarType = {
  myEventsList: Array<any>;
  isShowNewModalView: boolean;
  isShowCreateModalView: boolean;
};