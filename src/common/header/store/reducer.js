import * as Types from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false
});

export default (state = defaultState, action) => {
    if (action.type === Types.SEARCH_FOCUS) {
        return state.set('focused', true);
    }
    if (action.type === Types.SEARCH_BLUR) {
        return state.set('focused', false)
    }
    return state;
}