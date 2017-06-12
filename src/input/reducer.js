let initialState = {
  active: false,
  inputValue: ''
}

export let input = (state = initialState, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      return Object.assign({}, state, { inputValue: action.value })
    case 'TOGGLE_INPUT':
      return Object.assign({}, state, { active: !state.active })
    default:
      return state
  }
}