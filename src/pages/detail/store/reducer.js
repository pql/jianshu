import * as Types from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = {
    title: '衡水中学',
    content: `
        <img src="//upload.jianshu.io/admin_banners/web_images/4759/dbf72c4d562f220fe8032de0d9daa3df190f3dc9.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
        <p>abcabc</p>
    `
}

export default (state = defaultState, action) => {
    switch(action.type) {
        default: 
            return state;
    }
}