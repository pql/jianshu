import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { 
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    Addition,
    Button
} from './style';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            focused: false
        }

        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
    }

    render () {
        return (
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登陆</NavItem>
                    <NavItem className="right">
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition 
                            timeout={200}
                            classNames="slide"
                            in={this.state.focused}>
                            <NavSearch 
                                onFocus={this.handleInputFocus}
                                onBlur={this.handleInputBlur}
                                className={this.state.focused ? 'focused' : ''}></NavSearch>
                        </CSSTransition>
                        <span className={this.state.focused ? 'focused iconfont' : 'iconfont'}>&#xe60a;</span>
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="write">
                        <span className="iconfont">&#xe774;</span>
                        写文章
                    </Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }

    handleInputFocus() {
        this.setState({
            focused: true
        })
    }

    handleInputBlur() {
        this.setState({
            focused: false
        })
    }
}

export default Header