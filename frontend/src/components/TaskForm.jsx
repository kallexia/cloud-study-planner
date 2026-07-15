import { useState } from 'react'

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('')
  const [course, setCourse] = useState('')
  const [dueDate, setDueDate] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (!title.trim() || !course.trim() || !dueDate) {
      return
    }

    const newTask = {
      id: Date.now(),
      title: title.trim(),
      course: course.trim(),
      dueDate,
      completed: false,
    }

    onAddTask(newTask)

    setTitle('')
    setCourse('')
    setDueDate('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="task-title">Task title</label>

        <input
          id="task-title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="e.g. Complete React assignment"
        />
      </div>

      <div className="form-field">
        <label htmlFor="task-course">Course</label>

        <input
          id="task-course"
          type="text"
          value={course}
          onChange={(event) => setCourse(event.target.value)}
          placeholder="e.g. Software Engineering"
        />
      </div>

      <div className="form-field">
        <label htmlFor="task-due-date">Due date</label>

        <input
          id="task-due-date"
          type="date"
          value={dueDate}
          onChange={(event) => setDueDate(event.target.value)}
        />
      </div>

      <button className="add-task-button" type="submit">
        Add task
      </button>
    </form>
  )
}

export default TaskForm