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
  start?: stringOrDate | null;
  end?: stringOrDate | null;
  title?: string | undefined;
  newStart?: stringOrDate | null;
  newEnd?: stringOrDate | null;
  id?: string
};
