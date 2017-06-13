import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ButtonComponent from './components/buttonComponent';
import { onDeleteAllClick } from './actions';
import React from 'react';

//Icons
import MdDelete from 'react-icons/lib/md/delete';

let styles = {
  base: {
    position: 'fixed',
    background: '#d11b14',
    right: '20px',
    bottom: '80px'
  },
  icon: {
    fontSize: '40px',
    color: '#fff'
  }
}

let StyledButton = ({ onClick }) => (
  <ButtonComponent style={styles.base} type={'round'} onClick={onClick}>
    <MdDelete style={styles.icon} />
  </ButtonComponent>
)

let mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    onClick: onDeleteAllClick
  }, dispatch)
)

let DeleteAllButtonContainer = connect(null, mapDispatchToProps)(StyledButton)

export default DeleteAllButtonContainer;