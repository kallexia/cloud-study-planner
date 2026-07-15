import { useState } from 'react'
import TaskItem from './TaskItem'
import TaskForm from './TaskForm'

function TasksSection() {
    const [tasks, setTasks] = useState([
        {
        id: 1,
        title: 'Complete cloud architecture report',
        course: 'Cloud Computing',
        dueDate: '20 July 2026',
        completed: false,
        },
        {
        id: 2,
        title: 'Review React component structure',
        course: 'Software Engineering',
        dueDate: '22 July 2026',
        completed: true,
        },
        {
        id: 3,
        title: 'Prepare database schema',
        course: 'Database Systems',
        dueDate: '25 July 2026',
        completed: false,
        },
    ])

    function handleToggleTask(taskId) {
        setTasks((currentTasks) =>
        currentTasks.map((task) =>
            task.id === taskId
            ? { ...task, completed: !task.completed }
            : task
        )
        )
    }

    function handleAddTask(newTask) {
        setTasks((currentTasks) => [...currentTasks, newTask])
    }   

    return (
        <section id="tasks" className="tasks-section">
        <div className="section-content">
            <div className="section-heading">
            <p className="section-label">Your schedule</p>
            <h2>Upcoming tasks</h2>
            <p>
                Keep track of your academic work and mark tasks as completed.
            </p>
            </div>

            <TaskForm onAddTask={handleAddTask} />

            <div className="tasks-list">
            {tasks.map((task) => (
                <TaskItem
                key={task.id}
                task={task}
                onToggle={handleToggleTask}
                />
            ))}
            </div>
        </div>
        </section>
    )
    }

export default TasksSection