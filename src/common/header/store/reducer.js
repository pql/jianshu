import * as Types from './actionTypes';

const defaultState = {
    focused: false
};

export default (state = defaultState, action) => {
    if (action.type === Types.SEARCH_FOCUS) {
        return {
            focused: true
        }
    }
    if (action.type === Types.SEARCH_BLUR) {
        return {
            focused: false
        }
    }
    return state;
}