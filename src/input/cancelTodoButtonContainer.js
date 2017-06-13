import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ButtonComponent from '../buttons/components/buttonComponent';
import { toggleInput } from './actions';
import React from 'react';

let styles = {
  base: {
    display: 'inline-block',
    position: 'relative',
    background: '#d11b14',
    color: '#fff',
    fontSize: '25px',
    lineHeight: '40px',
    textAlign: 'center'
  }
}

let StyledButton = ({ onClick }) => (
  <ButtonComponent style={styles.base} type={'rectangle'} onClick={onClick}>
    Cancel
  </ButtonComponent>
)

let mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    onClick: toggleInput
  }, dispatch)
)

let CancelTodoButtonContainer = connect(null, mapDispatchToProps)(StyledButton)

export default CancelTodoButtonContainer;