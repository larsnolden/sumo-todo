export let onNewTodoClick = () => (
  {
    type: 'TOGGLE_INPUT'
  }
)

export let onDeleteAllClick = () => (
  {
    type: 'server/DELETE_ALL'
  }
)

export let onToggleAllClick = () => (
  {
    type: 'server/FINISH_ALL'
  }
)