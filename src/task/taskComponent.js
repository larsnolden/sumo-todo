import React from 'react';
import Radium from 'radium';
import MdClear from 'react-icons/lib/md/clear';
import MdCheck from 'react-icons/lib/md/check';


let styles = {
  base: {
    flexBasis: '100%',
    marginTop: '15px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '30px',
    padding: '10px',
    border: '1px solid #7a7a7a',
    boxShadow: '1px 1px 6px 0px rgba(0,0,0,0.35)'
  },
  checkBox: {
    flexBasis: '30px',
    height: 'inherit',
    borderRadius: '100%',
    border: '2px solid #7a7a7a',
    background: '#fff',
    cursor: 'pointer',
    icon: {
      fontSize: '30px',
      color: '#fff'
    },
    active: {
      background: '#1475d1'
    },
    '@media (max-width: 700px)': {
      icon: {
        fontSize: '20px'
      }
    }
  },
  title: {
    flexBasis: '80%',
    fontSize: '30px',
    fontWeight: 400,
    lineHeight: '30px',
    margin: 0,
    color: '#7a7a7a',
    height: 'inherit',
    '@media (max-width: 700px)': {
      fontSize: '20px',
      paddingLeft: '10px'
    }
  },
  remove: {
    flexBasis: '10%',
    textAlign: 'right',
    color: '#7a7a7a',
    height: 'inherit',
    icon: {
      cursor: 'pointer',
      fontSize: '30px'
    },
    '@media (max-width: 700px)': {
      fontSize: '20px'
    }
  }
}

//change Style depending on if Todo is done
let checkBoxStyle = (done) => {
  if (done) return styles.checkBox.active
  else return null
}

let TaskComponent = ({ title, done, onRemove, onDone }) => (
  <div style={styles.base}>
    <div onClick={onDone} style={[styles.checkBox, checkBoxStyle(done)]}>{done ? <MdCheck style={styles.checkBox.icon} /> : null}</div>
    <h1 style={styles.title}>{title}</h1>
    <div style={styles.remove}><MdClear onClick={onRemove} style={styles.remove.icon} /></div>
  </div>
)

export default Radium(TaskComponent);