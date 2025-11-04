import React, { useEffect, useState } from 'react'
import TaskInput from './Components/TaskInput'
import TaskList from './Components/TaskList';
import ProgressionTracker from './Components/ProgressionTracker';
import './App.css'

function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

  const deleteTask = (index) => {
    const newTask = tasks.filter((_, i) => i !== index);
    setTasks(newTask);
  }

  const toggleComplete = (index) => {
    const updatedTask = tasks.map((t, i) => 
      i === index ? {...t, completed: !t.completed} : t
    );
    setTasks(updatedTask);
  }

  const updateTask = (index, updatedTask) => {
    const newTask = [...tasks];
    newTask[index] = updatedTask;
    setTasks(newTask);
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className='app-container'>
    <div className='title'>
      <h1>Taskify</h1>
      <p>Your day, simplified.</p>
    </div>
    <TaskInput addTask = {addTask}/>
    <TaskList tasks={tasks}  deleteTask={deleteTask} toggleComplete={toggleComplete} updateTask={updateTask}/>
    { tasks.length > 0 && <ProgressionTracker tasks={tasks} />}
    </div>
  )
}

export default App