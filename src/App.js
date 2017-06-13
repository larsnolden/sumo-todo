import React, { Component } from 'react';
import { Provider } from 'react-redux'
import configureStore from './configureStore';
import AddButtonContainer from './addButton/addButtonContainer';
import InputContainer from './input/inputContainer';
import ListContainer from './list/listContainer';

//Global Styling
import { Style, StyleRoot } from 'radium';

let styles = {
  body: {
    margin: 0,
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif'
  }
}

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StyleRoot>
          <Style rules={styles} />
          <ListContainer />
          <InputContainer />
          <AddButtonContainer />
        </StyleRoot>
      </Provider>
    );
  }
}

export default App;
