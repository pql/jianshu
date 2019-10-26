import React, { Component } from 'react';
import { GlobalStyle } from './style';
import { IconfontStyle } from './statics/iconfont/iconfont';
import Header from './common/header';

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <IconfontStyle />
        <Header />
      </div>
    )
  }
}

export default App;
