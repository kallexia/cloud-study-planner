function TaskItem({ task, onToggle, onDelete }) {
  return (
    <article className={`task-item ${task.completed ? 'task-completed' : ''}`}>
      <div className="task-details">
        <h3>{task.title}</h3>

        <p>
          {task.course} · Due:{' '}
          {new Date(task.dueDate).toLocaleDateString()}
        </p>
      </div>

      <div className="task-actions">
        <button
          className="task-toggle-button"
          type="button"
          onClick={() => onToggle(task.id)}
        >
          {task.completed ? 'Completed' : 'Mark as complete'}
        </button>

        <button
          className="task-delete-button"
          type="button"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </article>
  )
}

export default TaskItem