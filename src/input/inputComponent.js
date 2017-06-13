import React from 'react';
import Radium from 'radium';

import AddTodoButtonContainer from './addTodoButtonContainer';
import CancelTodoButtonContainer from './cancelTodoButtonContainer';

let styles = {
  base: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    background: 'rgba(122, 122, 122, 0.9)',
    zIndex: 2
  },
  wrapper: {
    display: 'block',
    width: '700px',
    margin: '10% auto 0 auto',
    '@media (max-width: 700px)': {
      width: '90%',
      marginLeft: '5%'
    }
  },
  input: {
    width: '100%',
    marginBottom: '20px',
    background: '#fff',
    borderRadius: '3px',
    color: '#7a7a7a',
    fontSize: '30px',
    lineHeight: '30px',
    border: '1px solid #7a7a7a',
    ':focus': {
      outline: 'none'
    }
  }
}

let InputComponent = ({ active, inputValue, onInputChange, onKeyDown }) => {
  if (active) return (
    <div style={styles.base}>
      <div style={styles.wrapper}>
        <input style={styles.input} onKeyDown={onKeyDown} onChange={onInputChange} value={inputValue} autoFocus={true} />
        <AddTodoButtonContainer />
        <CancelTodoButtonContainer />
      </div>
    </div>
  )
  else return null
}

export default Radium(InputComponent)