import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ListComponent from './listComponent';

import {
  onRemove,
  onDone
} from './actions';

let mapStateToProps = state => ({
  todos: state.list.todos
})

let mapDispatchToProps = dispatch => bindActionCreators({
  onRemove,
  onDone
}, dispatch)

const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListComponent)

export default ListContainer
