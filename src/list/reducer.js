import { setItemParsed } from '../localStorage';

const initialState = {
  todos: []
}

export let list = (state = initialState, action) => {
  switch (action.type) {
    //replace all Todos on first load
    case 'LOAD_ALL':
      { //block scope + 'let' to avoid multi declaration of todos
        console.log(action.todos)
        let state = { todos: action.todos }
        setItemParsed('todos', Object.assign({}, state, { todos: action.todos }))
        return Object.assign({}, state, { todos: action.todos })
      }
    case 'ADD_TODO':
      {
        let todos = Object.assign({}, state, { todos: state.todos.concat([action.todo]) })
        setItemParsed('todos', todos)
        return todos
      }
    case 'REMOVE_TODO':
      {
        let todos = Object.assign({}, state, { todos: state.todos.filter(todo => todo.id !== action.id) })
        setItemParsed('todos', todos)
        return todos
      }
    case 'SET_DONE_TODO':
      {
        let todos = Object.assign({}, state, { todos: state.todos.map(todo => todo.id === action.id ? Object.defineProperty(todo, 'done', { value: (!todo.done) }) : todo) })
        setItemParsed('todos', todos)
        return todos
      }
    case 'FINISH_ALL':
      {
        let todos = Object.assign({}, state, { todos: state.todos.map(todo => Object.assign(todo, { done: true })) })
        setItemParsed('todos', todos)
        return todos
      }
    case 'DELETE_ALL':
      {
        let todos = Object.assign({}, state, { todos: [] })
        setItemParsed('todos', todos)
        return todos
      }
    default:
      return state
  }
}