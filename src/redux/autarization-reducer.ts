import { InitialStateAutarizationType } from "./reducersTypes/reducersTypes";
import { InferActionTypes } from "./redux-store";

const SET_LOGIN = 'SET_LOGIN';

const initialState: InitialStateAutarizationType = {
    isLogin: false,
    user: {
        name: 'Admin',
        age: '25',
        password: '12345678',
        language: 'русский',
        email: 'admin@gmail.com'
    }
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