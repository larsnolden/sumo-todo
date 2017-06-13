import React, { Component } from 'react';
import { Provider } from 'react-redux'
import configureStore from './configureStore';
import AddButtonContainer from './buttons/addButtonContainer';
import DeleteAllButtonContainer from './buttons/deleteAllButtonContainer';
import ToggleAllButtonContainer from './buttons/toggleAllButtonContainer';
import InputContainer from './input/inputContainer';
import ListContainer from './list/listContainer';

//to fetch local State
import { getItemParsed } from './localStorage';

//Global Styling
import { Style, StyleRoot } from 'radium';

let styles = {
  body: {
    margin: 0,
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif'
  }
}

let preloadedState = getItemParsed('todos')

const store = configureStore(preloadedState);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StyleRoot>
          <Style rules={styles} />
          <ListContainer />
          <InputContainer />
          <AddButtonContainer />
          <DeleteAllButtonContainer />
          <ToggleAllButtonContainer />
        </StyleRoot>
      </Provider>
    );
  }
}

export default App;