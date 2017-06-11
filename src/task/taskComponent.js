import React from 'react';
import Radium from 'radium';

let styles = {
  base: {
    flexBase: '100%',
    display: 'flex',
    flexDirection: 'row',
    height: '30px'
  },
  done: {
    flexBase: '10%',
    height: 'inherit'
  },
  title: {
    flexBase: '80%',
    fontSize: '25px',
    color: '#474747',
    height: 'inherit'
  },
  remove: {
    flexBase: '10%',
    height: 'inherit'
  }
}

let TaskComponent = ({title, done, onRemove}) => (
  <div style={styles.base}>
    <div style={styles.done}/><h1 style={styles.title}>{title}</h1><div style={styles.remove}><i className={'material-icons'}>face</i></div>
  </div>
)

export default Radium(TaskComponent);