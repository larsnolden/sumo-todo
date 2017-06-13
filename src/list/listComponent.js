import React from 'react';
import Radium from 'radium';
import TaskComponent from '../task/taskComponent';

let styles = {
  base: {
    position: 'relative',
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    width: '700px',
    height: 'auto',
    margin: '200px auto',
    '@media (max-width: 700px)': {
      width: '100%',
      height: '100%'
    },
  }
}

let ListComponent = ({ todos, onRemove, onDone }) => (
  <div style={styles.base}>
    {
      todos.map(
        todo =>
          <TaskComponent
            key={todo.id}
            title={todo.title}
            done={todo.done}
            onRemove={() => onRemove(todo.id)}
            onDone={() => onDone(todo.id)}
          />
      )
    }
  </div>
)

export default Radium(ListComponent);