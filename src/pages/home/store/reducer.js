import { fromJS } from 'immutable';
import * as Types from './actionTypes';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    showScroll: false,
});

const changeHomeData = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
    })
}

const addArticleList = (state, action) => {
    return state.merge({
        'articleList': state.get('articleList').concat(action.list),
        'articlePage': action.nextPage
    })
}

const toggleScrollTop = (state, action) => {
    return state.set('showScroll', action.show)
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case Types.CHANGE_HOME_DATA:
            return changeHomeData(state, action);
        case Types.ADD_ARTICLE_LIST:
            return addArticleList(state, action);
        case Types.TOGGLE_SCROLL_TOP:
            return toggleScrollTop(state, action);
        default:
            return state
    }
}