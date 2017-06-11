import React from 'react';
import Radum from 'radium';

let styles = {
  base: {
    flexBase: '100%'
  }
}

let TaskComponent = ({title, done, onRemove}) => {
  <div style={styles.base}>
    <h1>{title}</h1>
  </div>
}