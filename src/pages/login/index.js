import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    LoginWrapper, 
    LoginBox,
    Input,
    Button
} from './style';
import { actionCreators } from './store';
import { Redirect } from 'react-router-dom';

class Login extends PureComponent {
    render () {
        const { loginStatus, login } = this.props
        if (!loginStatus) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="账号" ref={(input) => {this.account = input}}/>
                        <Input type="password" placeholder="密码" ref={(input) => {this.password = input}}/>
                        <Button onClick={() => login(this.account, this.password)}>登陆</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        } else {
            return <Redirect to='/' />
        }
    }
}

const mapStateToProps = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
})

const mapDispatchToProps = (dispatch) => ({
    login(accountElem, passwordElem) {
        dispatch(actionCreators.login(accountElem, passwordElem));
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Login);