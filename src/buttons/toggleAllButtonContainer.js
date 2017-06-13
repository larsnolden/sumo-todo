import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ButtonComponent from './buttonComponent';
import { onToggleAllClick } from './actions';
import React from 'react';

//Icons
import MdCheck from 'react-icons/lib/md/check';

let styles = {
  base: {
    background: '#1475d1',
    right: '20px',
    bottom: '140px'
  },
  icon: {
    fontSize: '40px',
    color: '#fff'
  }
}

let StyledButton = ({ onClick }) => (
  <ButtonComponent style={styles.base} onClick={onClick}>
    <MdCheck style={styles.icon} />
  </ButtonComponent>
)

let mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    onClick: onToggleAllClick
  }, dispatch)
)

let ToggleAllButtonContainer = connect(null, mapDispatchToProps)(StyledButton)

export default ToggleAllButtonContainer;