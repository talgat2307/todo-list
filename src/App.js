import React, { useState } from 'react'
import './App.css';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';

const App = () =>  {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }


  return (
    <div className="App">
      <h2>To Do list</h2>
      <AddTaskForm addTodo={addTodo}/>
      <TaskList
        todos={todos}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
