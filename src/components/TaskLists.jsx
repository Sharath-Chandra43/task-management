
function TaskList({ tasks, onEdit, onDelete }) {
  return (
    <div className="task-list-container">
      {tasks.length === 0 && (
        <p className="no-tasks">No tasks found.</p>
      )}

      {tasks.map((task) => (
        <div key={task.id} className="task-card">
          <div className="task-card-content">
            <div>
              <h2 className="task-title">{task.title}</h2>
              {task.description && (
                <p className="task-description">{task.description}</p>
              )}
              <p className="task-due-date">
                Due: {task.due_date || 'N/A'}
              </p>
              <span className={`task-status ${task.status}`}>
                {task.status}
              </span>
            </div>

            <div className="task-actions">
              <button
                onClick={() => onEdit(task)}
                className="edit-btn"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(task.id)}
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;