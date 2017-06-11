import React, { Component } from 'react';
import { Provider } from 'react-redux'
import configureStore from './configureStore';

//Global Styling
import { StyleRoot } from 'radium';

let styles = {
  base: {
    fontFamily: 'Roboto, SansSerif'
  }
}

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StyleRoot style={styles.base}>
          <h1>asd</h1>
        </StyleRoot>
      </Provider>
    );
  }
}

export default App;
