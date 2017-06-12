import React from 'react';
import Radium from 'radium';

let styles = {
  base: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: 'rgba(122, 122, 122, 0.1)'
  },
  input: {
    position: 'absolute',
    zIndex: 1,
    width: '700px',
    top: '200px',
    left: '50%',
    transform: 'translate(-50%, -50%)',
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

let InputComponent = ({ active, inputValue, onInputChange }) => {
  if (active) return (
    <div style={styles.base}>
      <input style={styles.input} onChange={onInputChange} value={inputValue} />
    </div>

  )
  else return null
}

export default Radium(InputComponent)