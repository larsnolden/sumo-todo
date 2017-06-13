export let onRemove = id => (
  {
    type: 'server/REMOVE_TODO',
    id
  }
)

export let onDone = id => (
  {
    type: 'server/SET_DONE_TODO',
    id
  }
)