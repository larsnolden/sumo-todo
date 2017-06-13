import React from 'react'
import Radium from 'radium';

const styles = {
  base: {
    position: 'fixed',
    height: '40px',
    width: '40px',
    padding: '5px',
    borderRadius: '50%',
    cursor: 'pointer',
  }
}

//accept Icon as children
let ButtonComponent = ({ style, onClick, children }) => (
  //combine styles and style(prop)
  <div style={{ ...styles.base, ...style }} onClick={(onClick)}>
    {children}
  </div>
)

export default Radium(ButtonComponent);