import React from 'react';
import Task from './Task';

const TaskList = ({todos, removeTodo}) => {
  return(
    <div className='TodoList'>
      <ul>
        {todos.map(todo => {
          return <Task
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
          />
        })}
      </ul>
    </div>
  );
}

export default TaskList;