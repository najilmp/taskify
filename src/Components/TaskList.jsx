import React, { useState } from 'react'
import './TaskList.css'

function TaskList({tasks, deleteTask, toggleComplete, updateTask}) {

  const [editIndex, setEditIndex] = useState(null);
  const [editTask, setEditTask] = useState({ task: '', priority: '', type: '' });

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditTask(tasks[index]);
  }

  const handleSave = (index) => {
    updateTask(index, editTask);
    setEditIndex(null);
  }

  return (
    <ul className='task-list-container'>
        {tasks.map((t, index) => (
            <li key={index} className={editIndex === index ? 'editing' : ''}>
              {editIndex === index ? (
                <div className="edit-section">
                  <div className="edit-inputs">
                    <input
                      type='text'
                      value={editTask.task}
                      onChange={(e) => setEditTask({...editTask, task: e.target.value})}
                    />
                    <select
                      value={editTask.priority}
                      onChange={(e) => setEditTask({...editTask, priority: e.target.value})}
                      >
                        <option value='high'>High</option>
                        <option value='medium'>Medium</option>
                        <option value='low'>Low</option>
                    </select>
                    <select
                      value={editTask.type}
                      onChange={(e) => setEditTask({...editTask, type: e.target.value})}
                      >
                        <option value='general'>General</option>
                        <option value='personal'>Personal</option>
                        <option value='other'>Other</option>
                    </select>
                  </div>
                  <div className='edit-buttons'>
                  <button onClick={() => handleSave(index)}>Save</button>
                  <button onClick={() => setEditIndex(null)}>Cancel</button>
                  </div>
                </div>
              ) : (
                <div className='task-list'>
                  <div className="task-details">
                    <span className={`task-name ${t.completed ? 'completed' : ''}`}>{t.task}</span>
                    <span className="tag priority">{t.priority}</span>
                    <span className="tag type">{t.type}</span>
                  </div>

                  <div className='task-buttons'>
                    <button 
                      onClick={() => toggleComplete(index)}
                      className={t.completed ? 'undo-btn' : 'done-btn'}>
                        {t.completed ? 'Undo' : 'Done'}
                    </button>
                    <button
                      onClick={() => deleteTask(index)}
                      className='delete-btn'>
                        Delete
                    </button>
                    <button
                      onClick={() => handleEdit(index)}
                      className='edit-btn'>
                        Edit
                    </button>
                  </div>
                </div>
              )}
            </li>
        ))}
    </ul>
  )
}

export default TaskList