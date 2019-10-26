import * as Types from './actionTypes';
import { fromJS } from 'immutable'
import axios from 'axios';

export const searchFocus = () => ({
    type: Types.SEARCH_FOCUS
})

export const searchBlur = () => ({
    type: Types.SEARCH_BLUR
})

const changeList = (data) => ({
    type:  Types.CHANGE_LIST,
    data: fromJS(data)
})

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            dispatch(changeList(data.data))
        }).catch(() => {
            console.log('error')
        })
    }
}