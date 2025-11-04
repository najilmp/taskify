import React, { useState } from 'react'
import './TaskInput.css'

function TaskInput({addTask}) {

    const [task, setTask] = useState("");
    const [priority, setPriority] = useState("high");
    const [type, setType] = useState("general");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim() === '') {
            return;
        }
        addTask({task, priority, type, completed: false});
        setTask("");
        setPriority("high");
        setType("general");
    }

  return (
    <form onSubmit={handleSubmit} className='task-form'>
    <div className='task-input'>
        <input 
            type="text"
            placeholder='Enter a new task'
            value={task}
            onChange={(e) => setTask(e.target.value)}
            />
        <button type='submit'>Add</button>
    </div>
    <div className='task-options'>
        <select
            value={type}
            onChange={(e) => setType(e.target.value)}
        >
            <option value="general">General</option>
            <option value="personal">Personal</option>
            <option value="other">Other</option>
        </select>
        <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
        >
            <option value='high'>High</option>
            <option value='medium'>Medium</option>
            <option value='low'>Low</option>
        </select>
    </div>
    </form>
  )
}

export default TaskInput