import * as Types from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false,
    list: []
});

export default (state = defaultState, action) => {
    if (action.type === Types.SEARCH_FOCUS) {
        return state.set('focused', true);
    }
    if (action.type === Types.SEARCH_BLUR) {
        return state.set('focused', false)
    }
    if (action.type === Types.CHANGE_LIST) {
        return state.set('list', action.data)
    }
    return state;
}