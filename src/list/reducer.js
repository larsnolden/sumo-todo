const initialState = {
  todos: []
}

export let list = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, { todos: state.todos.push(action.todo) })
    default:
      return state
  }
}