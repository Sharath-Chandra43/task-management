// src/App.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskForm from '../src/components/TaskForm';
import TaskList from '../src/components/TaskLists';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);

  const fetchTasks = async () => {
    const res = await axios.get('http://localhost:5000/api/tasks');
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleCreate = async (task) => {
    await axios.post('http://localhost:5000/api/tasks', task);
    fetchTasks();
  };

  const handleUpdate = async (id, task) => {
    await axios.put(`http://localhost:5000/api/tasks/${id}`, task);
    setEditTask(null);
    fetchTasks();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    fetchTasks();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
        <TaskForm onSubmit={editTask ? (data) => handleUpdate(editTask.id, data) : handleCreate} initialData={editTask} />
        <TaskList tasks={tasks} onEdit={setEditTask} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;