import React from 'react'
import Radium from 'radium';

const styles = {
  base: {
    cursor: 'pointer',
  },
  round: {
    height: '40px',
    width: '40px',
    padding: '5px',
    borderRadius: '50%',
  },
  rectangle: {
    height: '40px',
    width: '100px',
    padding: '5px',
    borderRadius: '5px',
    cursor: 'pointer',
  }
}

//accept Icon as children
let ButtonComponent = ({ style, type, onClick, children }) => (
  //combine styles and style(prop)
  <div style={{ ...styles.base, ...style, ...styles[type] }} onClick={(onClick)}>
    {children}
  </div>
)

export default Radium(ButtonComponent);