import React from 'react';
import Radium from 'radium';

let styles = {
  base: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    background: 'rgba(122, 122, 122, 0.9)'
  },
  input: {
    position: 'absolute',
    zIndex: 1,
    width: '700px',
    top: '30%',
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
    },
    '@media (max-width: 700px)': {
      width: '100%',
    }
  }
}

let InputComponent = ({ active, inputValue, onInputChange, onKeyPress }) => {
  if (active) return (
    <div style={styles.base}>
      <input style={styles.input} onKeyPress={onKeyPress} onChange={onInputChange} value={inputValue} autoFocus={true} />
    </div>
  )
  else return null
}

export default Radium(InputComponent)