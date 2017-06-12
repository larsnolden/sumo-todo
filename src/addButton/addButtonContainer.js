import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AddButtonComponent from './addButtonComponent';
import { onClick } from './actions';

let mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    onClick
  }, dispatch)
)

let AddButtonContainer = connect(null, mapDispatchToProps)(AddButtonComponent)

export default AddButtonContainer;