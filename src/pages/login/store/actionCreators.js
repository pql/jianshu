import axios from 'axios';
import * as Types from './actionTypes';

const changeLogin = () => ({
    type: Types.CHANGE_LOGIN,
    value: true
})

export const login = (account, password) => {
    return (dispatch) => {
        axios.get(`/api/login.json?account=${account}&password=${password}`).then((res) => {
            const result = res.data.data;
            if(result) {
                dispatch(changeLogin())
            } else {
                alert('登陆失败')
            }
        })
    }
}

export const logout = () => ({
    type: Types.LOGOUT,
    value: false,
})