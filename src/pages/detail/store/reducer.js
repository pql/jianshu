import * as Types from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    title: '',
    content: ''
})

const changeDetail = (state, action) => {
    return state.merge({
        title: action.title,
        content: action.content
    })
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case Types.CHANGE_DETAIL:
            return changeDetail(state, action)
        default: 
            return state;
    }
}

