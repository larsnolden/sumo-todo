import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onInputChange, onKeyDown } from './actions';
import InputComponent from './inputComponent';

let mapStateToProps = (state) => (
  {
    inputValue: state.input.inputValue,
    active: state.input.active
  }
)

//bind Action Creators so we don't have to call dispatch
let mapDispatchToProps = (dispatch) => bindActionCreators({
  onInputChange,
  onKeyDown
}, dispatch)

const InputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InputComponent)

export default InputContainer