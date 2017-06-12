import React from 'react';
import Radium from 'radium';
import MdClear from 'react-icons/lib/md/clear';

let styles = {
  base: {
    position: 'absolute',
    right: '20px',
    bottom: '20px',
    height: '40px',
    width: '40px',
    padding: '5px',
    background: '#f79b62',
    borderRadius: '50%',
    transform: 'rotate(45deg)'
  },
  icon: {
    fontSize: '40px',
    color: '#fff'
  }
}

let AddButtonComponent = ({ onClick }) => (
  <div style={styles.base} onClick={onClick}>
    <MdClear style={styles.icon} />
  </div>
)

export default Radium(AddButtonComponent);