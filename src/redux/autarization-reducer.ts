import { InitialStateAutarizationType } from "./reducersTypes/reducersTypes";
import { InferActionTypes } from "./redux-store";

const SET_LOGIN = 'SET_LOGIN';

let initialState: InitialStateAutarizationType = {
    isLogin: true
};

type InitialStateType = typeof initialState
type ActionTypes = InferActionTypes<typeof action>;

const autarizationReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case SET_LOGIN:
            return {
                ...state,
                isLogin: action.setLogin
            };

        default:
            return state;
    }
};

export const action = {
    setLogin: (setLogin: boolean) => ({
        type: SET_LOGIN,
        setLogin
    } as const)
}


export default autarizationReducer;