import { fromJS } from 'immutable';
import * as Types from './actionTypes';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: []
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case Types.CHANGE_HOME_DATA:
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList)
            })
        default:
            return state
    }
}