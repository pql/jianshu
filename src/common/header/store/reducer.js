import * as Types from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false,
    list: [],
    mouseIn: false,
    page: 1,
    totalPage: 1
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case Types.SEARCH_FOCUS : 
            return state.set('focused', true);
        case Types.SEARCH_BLUR : 
            return state.set('focused', false)
        case Types.CHANGE_LIST : 
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            });
        case Types.MOUSE_ENTER : 
            return state.set('mouseIn', true)
        case Types.MOUSE_LEAVE : 
            return state.set('mouseIn', false)
        case Types.CHANGE_PAGE:
            return state.set('page', action.page);
        default:
            return state
    }
}