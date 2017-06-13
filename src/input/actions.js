//send Todo to the server
export let sendTodo = (title) => (
  {
    type: 'server/ADD_TODO',
    title
  }
)

let toggleInput = () => (
  {
    type: 'TOGGLE_INPUT'
  }
)

let clearInput = () => (
  {
    type: 'INPUT_CHANGE',
    value: ''
  }
)

//send todo + close input + clear input on enter keypress
export let onKeyPress = (target) => {
  return (dispatch, getState) => {
    console.log(getState().input.inputValue)
    if (target.charCode === 13) {
      dispatch(sendTodo(getState().input.inputValue))
      dispatch(toggleInput())
      dispatch(clearInput())
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