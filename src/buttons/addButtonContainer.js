import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ButtonComponent from './components/buttonComponent';
import { onNewTodoClick } from './actions';
import React from 'react';

//Icons
import MdClear from 'react-icons/lib/md/clear';

let styles = {
  base: {
    position: 'fixed',
    background: '#f79b62',
    right: '20px',
    bottom: '20px',
    transform: 'rotate(45deg)'
  },
  icon: {
    fontSize: '40px',
    color: '#fff'
  }
}

let styledButton = ({ onClick }) => (
  <ButtonComponent style={styles.base} type={'round'} onClick={onClick}>
    <MdClear style={styles.icon} />
  </ButtonComponent>
)

let mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    onClick: onNewTodoClick
  }, dispatch)
)

let AddButtonContainer = connect(null, mapDispatchToProps)(styledButton)

export default AddButtonContainer;