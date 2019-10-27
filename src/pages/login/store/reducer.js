import * as Types from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    login: false
});

const changeLogin = (state, action) => {
    return state.set('login', action.value)
}

const logout = (state, action) => {
    return state.set('login', action.value)
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case Types.CHANGE_LOGIN :
            return changeLogin(state, action);
        case Types.LOGOUT :
            return logout(state, action);
        default:
            return state;
    }
}