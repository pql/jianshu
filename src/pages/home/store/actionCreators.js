import axios from 'axios';
import * as Types from './actionTypes';
import { fromJS } from 'immutable';

const changeHomeData = (result) => ({
    type: Types.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
})

const addHomeList = (list, nextPage) => ({
    type: Types.ADD_ARTICLE_LIST,
    list: fromJS(list),
    nextPage
})


export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data
            dispatch(changeHomeData(result))
        })
    }
}

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' + page).then((res) => {
            const result = res.data.data
            dispatch(addHomeList(result, page + 1))
        })
    }
}

export const toggleTopShow = (show) => ({
    type: Types.TOGGLE_SCROLL_TOP,
    show
})