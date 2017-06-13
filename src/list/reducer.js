//need to get initial State from ServiceWorker or localStorage -> 👀 configureStore.js
const initialState = {
  todos: []
}

export let list = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_ALL':
      //replace all Todos on first load
      console.log(action.todos)
      return { todos: action.todos }
    case 'ADD_TODO':
      return Object.assign({}, state, { todos: state.todos.concat([action.todo]) })
    case 'REMOVE_TODO':
      return Object.assign({}, state, { todos: state.todos.filter(todo => todo.id !== action.id) })
    case 'SET_DONE_TODO':
      return Object.assign({}, state, { todos: state.todos.map(todo => todo.id === action.id ? Object.defineProperty(todo, 'done', { value: (!todo.done) }) : todo) })
    default:
      return state
  }
}