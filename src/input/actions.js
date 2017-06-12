//send Todo to the server
export let sendTodo = (todo) => {
  return (dispatch, getState) => {
    dispatch('server/addTodo', todo)
  }
}

//handle inputChange
export let onInputChange = (target) => (
  {
    type: 'INPUT_CHANGE',
    value: targe.value
  }
)