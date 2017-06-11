import React from 'react';
import Radium from 'radium';

let styles = {
  base: {
    position: 'relative',
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    width: '700px',
    height: 'auto',
    margin: '200px auto',
    '@media (max-width: 700px)': {
      width: '100%',
      height: '100%'
    },
  }
}

let ListComponent = ({todos}) => {
  <div style={styles.base}>
    {todos}
  </div>
}

export default Radium(ListComponent);