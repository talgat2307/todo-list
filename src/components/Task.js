import React from 'react';
import '../App.css';

const Task = ({todo, removeTodo}) => {

  const handleRemoveClick = () => {
    removeTodo(todo.id);
  }
  return (
    <div className='tasks'>
      <li className='list'>
        {todo.task}
        <button className='btn' onClick={handleRemoveClick}>X</button>
      </li>
    </div>
  );

}

export default Task;