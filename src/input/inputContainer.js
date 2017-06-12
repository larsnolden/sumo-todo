import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendTodo, onInputChange } from './actions';
import InputComponent from './InputComponent';

let mapStateToProps = (state) => (
  {
    inputValue: state.input.inputValue
  }
)

//bind Action Creators so we don't have to call dispatch
let mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    sendTodo,
    onInputChange
  }, dispatch)
)

const InputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InputComponent)

export default InputContainer