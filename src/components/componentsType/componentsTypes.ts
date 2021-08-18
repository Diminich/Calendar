import { stringOrDate } from "react-big-calendar";

export type MenuType = {
  id: string;
  element: string;
  route: string;
};

export type InitialValuesLogin = {
  loginUser: string;
  passwordUser: string;
};

export type NewEventList = {
  start: stringOrDate;
  end: stringOrDate;
  title: string;
  id: string;
};

export type NewDateEventList = {
  newStart: stringOrDate;
  newEnd: stringOrDate;
};