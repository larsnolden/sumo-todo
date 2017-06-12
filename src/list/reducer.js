let initialState = {
  todos: []
}

export let list = ({ state = initalState, action }) => {
  switch (action.type) {
    case 'addTodo':
      return Object.assign({}, state, { todos: todos.push(action.todo) })
    default:
      return state
  }
}