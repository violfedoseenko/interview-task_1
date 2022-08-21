import { LOGIN, PASSWORD } from "../../constants/constants"

const initialState = {
    login: '',
    password: ''
}

export const authReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case LOGIN:
            // возвращаем объект состояния, в котором развернуто старое состояние, изменяемое посредством payload 
            return { ...state, login: actions.payload};
        case PASSWORD:
            return { ...state, password: actions.payload};
        default:
            return state;
    }
}
