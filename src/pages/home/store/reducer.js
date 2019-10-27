import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [
        {
            id: 1,
            title: '社会热点',
            imgUrl: '//upload.jianshu.io/admin_banners/web_images/4759/dbf72c4d562f220fe8032de0d9daa3df190f3dc9.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
        },
        {
            id: 2,
            title: '时事政治',
            imgUrl: '//upload.jianshu.io/admin_banners/web_images/4759/dbf72c4d562f220fe8032de0d9daa3df190f3dc9.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
        }
    ],
    articleList: [
        {
            id: 1,
            title: '胡歌',
            desc: '描述',
            imgUrl: '//upload.jianshu.io/admin_banners/web_images/4759/dbf72c4d562f220fe8032de0d9daa3df190f3dc9.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
        },
        {
            id: 2,
            title: '胡歌',
            desc: '描述',
            imgUrl: '//upload.jianshu.io/admin_banners/web_images/4759/dbf72c4d562f220fe8032de0d9daa3df190f3dc9.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
        },
        {
            id: 3,
            title: '胡歌',
            desc: '描述',
            imgUrl: '//upload.jianshu.io/admin_banners/web_images/4759/dbf72c4d562f220fe8032de0d9daa3df190f3dc9.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
        }
    ],
    recommendList: [
        {
            id: 1,
            imgUrl: '//upload.jianshu.io/admin_banners/web_images/4759/dbf72c4d562f220fe8032de0d9daa3df190f3dc9.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
        },
        {
            id: 2,
            imgUrl: '//upload.jianshu.io/admin_banners/web_images/4759/dbf72c4d562f220fe8032de0d9daa3df190f3dc9.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
        }
    ]
});

export default (state = defaultState, action) => {
    switch(action.type) {
        default:
            return state
    }
}