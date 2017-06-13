//send Todo to the server
export let sendTodo = (title) => (
  {
    type: 'server/ADD_TODO',
    title
  }
)

export let toggleInput = () => (
  {
    type: 'TOGGLE_INPUT'
  }
)

export let submitTodo = () => (dispatch, getState) => {
  dispatch(sendTodo(getState().input.inputValue))
  dispatch(toggleInput())
}

//send todo + close input + clear input on enter keypress
export let onKeyDown = (event) => {
  return (dispatch, getState) => {
    switch (event.keyCode) {
      case 13:
        dispatch(submitTodo())
        break;
      case 27:
        dispatch(toggleInput())
        break;
      default:
        break;
    }
  }
}

//handle inputChange
export let onInputChange = (event) => (
  {
    type: 'INPUT_CHANGE',
    value: event.target.value
  }
)