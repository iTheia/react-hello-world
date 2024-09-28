import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>To-Do List</h1>

        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Enter new task'
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button className='btn btn-primary' onClick={addTask}>
            Add Task
          </button>
        </div>

        <ul className='list-group'>
          {tasks.map((task, index) => (
            <li className='list-group-item' key={index}>
              {task}
              <button
                className='btn btn-danger btn-sm'
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
