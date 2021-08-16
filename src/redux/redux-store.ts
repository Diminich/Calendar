import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import autarizationReducer from "./autarization-reducer";
import calendarReducer from "./calendar-reducer";

let reducers = combineReducers({
   autarizationPage: autarizationReducer,
   calendarPage: calendarReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export type AppStateType = ReturnType<typeof reducers>
export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export default store