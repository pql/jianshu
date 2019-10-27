import React, { Component } from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { 
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style';
import { actionCreators } from './store'
import { connect } from 'react-redux';

class Home extends Component {
    render () {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img alt='' 
                        className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4759/dbf72c4d562f220fe8032de0d9daa3df190f3dc9.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.changeHomeData();
    }
}


const mapDispatchToProps = (dispatch) => ({
    changeHomeData() {
        dispatch(actionCreators.getHomeInfo())
    }
})


export default connect(null, mapDispatchToProps)(Home);