function TaskItem({ task, onToggle }) {
    return (
    <article className={`task-item ${task.completed ? 'task-completed' : ''}`}>
        <div>
            <h3>{task.title}</h3>

            <p>
            {task.course} · Due: {new Date(task.dueDate).toLocaleDateString()}
            </p>
        </div>

        <button
            className="task-toggle-button"
            type="button"
            onClick={() => onToggle(task.id)}
            >
            {task.completed ? 'Completed' : 'Mark as complete'}
        </button>
    </article>
    )
}

export default TaskItem