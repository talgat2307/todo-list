import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddTaskForm = ({addTodo}) => {
  const [todo, setTodo] = useState({
    id: '',
    task: '',
    completed: false
  })

  const handleTaskInputChange = (e) => {
    setTodo({...todo, task: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({...todo, id: uuidv4() });
      setTodo({...todo, task: ''});
    }
  }

  return(
    <div className='TodoForm'>
     <form onSubmit={handleSubmit}>
       <input className='input' type='text' value={todo.task} onChange={handleTaskInputChange} />
       <button className='addBtn' type='submit'>Add</button>
     </form>
    </div>
  );
}

export default AddTaskForm;