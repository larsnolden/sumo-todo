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
    margin: '0 auto',
    '@media (max-width: 700px)': {
      width: '90%',
      marginLeft: '5%'
    },
  },
  title: {
    color: '#7a7a7a',
    fontSize: '40px'
  }
}

let ListComponent = ({ todos, onRemove, onDone }) => (
  <div style={styles.base}>
    <h1 style={styles.title}>Todos</h1>
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