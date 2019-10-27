import React, { Component } from 'react';
import { GlobalStyle } from './style';
import { IconfontStyle } from './statics/iconfont/iconfont';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <GlobalStyle />
          <IconfontStyle />
          <HashRouter>
            <div>
              <Header />
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/login" component={Login}></Route>
              <Route exact path="/write" component={Write}></Route>
              <Route exact path="/detail/:id" component={Detail}></Route>
            </div>
          </HashRouter>
        </div>
      </Provider>
    )
  }
}

export default App;
