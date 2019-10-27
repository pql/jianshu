import React, { PureComponent } from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { 
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style';
import { actionCreators } from './store'
import { connect } from 'react-redux';

class Home extends PureComponent {

    render () {
        const { showScroll } = this.props
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
                {
                    showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null
                }
            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }

    handleScrollTop() {
        window.scrollTo(0, 0)
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
}


const mapDispatchToProps = (dispatch) => ({
    changeHomeData() {
        dispatch(actionCreators.getHomeInfo())
    },
    changeScrollTopShow() {
        if(document.documentElement.scrollTop > 100) {
            dispatch(actionCreators.toggleTopShow(true))
        } else {
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
})

const mapStateToProps = (state)  => ({
    showScroll: state.getIn(['home', 'showScroll'])
})


export default connect(mapStateToProps, mapDispatchToProps)(Home);