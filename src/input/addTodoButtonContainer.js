import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ButtonComponent from '../buttons/components/buttonComponent';
import { submitTodo } from './actions';
import React from 'react';

let styles = {
  base: {
    position: 'relative',
    display: 'inline-block',
    marginRight: '20px',
    background: '#f79b62',
    color: '#fff',
    fontSize: '25px',
    lineHeight: '40px',
    textAlign: 'center'
  }
}

let StyledButton = ({ onClick }) => (
  <ButtonComponent style={styles.base} type={'rectangle'} onClick={onClick}>
    Add
  </ButtonComponent>
)

let mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    onClick: submitTodo
  }, dispatch)
)

let AddTodoButtonContainer = connect(null, mapDispatchToProps)(StyledButton)

export default AddTodoButtonContainer;