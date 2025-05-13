import React, { useEffect, useState } from 'react';
import '../App.css'; // Import the CSS file

function TaskForm({ onSubmit, initialData }) {
  const [form, setForm] = useState({
    title: '',
    description: '',
    due_date: '',
    status: 'pending',
  });

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ title: '', description: '', due_date: '', status: 'pending' });
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <h2 className="task-form-title">
        {initialData ? 'Edit Task' : 'Create New Task'}
      </h2>

      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Title"
        className="task-form-input"
        required
      />

      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
        rows={3}
        className="task-form-input"
      />

      <input
        type="date"
        name="due_date"
        value={form.due_date}
        onChange={handleChange}
        className="task-form-input"
      />

      <select
        name="status"
        value={form.status}
        onChange={handleChange}
        className="task-form-input"
      >
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      <button
        type="submit"
        className="task-form-button"
      >
        {initialData ? 'Update Task' : 'Create Task'}
      </button>
    </form>
  );
}

export default TaskForm;
