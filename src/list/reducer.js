//need to get initial State from ServiceWorker or localStorage -> 👀 configureStore.js
const initialState = {
  todos: [{
    title: 'Milk the hamster',
    done: false,
    id: 1
  }, {
    title: 'pet the hamster',
    done: true,
    id: 2
  },
  ]
}

export let list = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, { todos: state.todos.push(action.todo) })
    case 'REMOVE_TODO':
      return Object.assign({}, state, { todos: state.todos.filter(todo => todo.id !== action.id) })
    case 'SET_DONE_TODO':
      return Object.assign({}, state, { todos: state.todos.map(todo => todo.id = action.id ? todo.done = !todo.done : todo) })
    default:
      return state
  }
}