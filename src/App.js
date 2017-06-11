import React, { Component } from 'react';
import { Provider } from 'react-redux'
import configureStore from './configureStore';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <h1>asd</h1>
      </Provider>
    );
  }
}

export default App;
