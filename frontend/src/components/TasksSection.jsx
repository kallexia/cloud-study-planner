import { useEffect, useState } from 'react'
import TaskItem from './TaskItem'
import TaskForm from './TaskForm'

function TasksSection() {
    const initialTasks = [
        {
            id: 1,
            title: 'Complete cloud architecture report',
            course: 'Cloud Computing',
            dueDate: '2026-07-20',
            completed: false,
        },
        {
            id: 2,
            title: 'Review React component structure',
            course: 'Software Engineering',
            dueDate: '2026-07-22',
            completed: true,
        },
        {
            id: 3,
            title: 'Prepare database schema',
            course: 'Database Systems',
            dueDate: '2026-07-25',
            completed: false,
        },
        ]
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('cloud-study-planner-tasks')

        return savedTasks ? JSON.parse(savedTasks) : initialTasks
    })

    const [filter, setFilter] = useState('all')

    useEffect(() => {
        localStorage.setItem(
            'cloud-study-planner-tasks',
            JSON.stringify(tasks)
        )
    }, [tasks])

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

    function handleDeleteTask(taskId) {
        setTasks((currentTasks) =>
            currentTasks.filter((task) => task.id !== taskId)
        )
    }

    const filteredTasks = tasks.filter((task) => {
        if (filter === 'completed') {
        return task.completed
        }

        if (filter === 'pending') {
        return !task.completed
        }

        return true
    })

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
            <div className="task-filters">
                <button
                    type="button"
                    className={filter === 'all' ? 'filter-button active' : 'filter-button'}
                    onClick={() => setFilter('all')}
                >
                    All
                </button>

                <button
                    type="button"
                    className={filter === 'pending' ? 'filter-button active' : 'filter-button'}
                    onClick={() => setFilter('pending')}
                >
                    Pending
                </button>

                <button
                    type="button"
                    className={
                    filter === 'completed' ? 'filter-button active' : 'filter-button'
                    }
                    onClick={() => setFilter('completed')}
                >
                    Completed
                </button>
            </div>
            <div className="tasks-list">
            {filteredTasks.length === 0 && (
                <p className="empty-tasks-message">
                    No tasks match the selected filter.
                </p>
            )}    
            {filteredTasks.map((task) => (
                <TaskItem
                key={task.id}
                task={task}
                onToggle={handleToggleTask}
                onDelete={handleDeleteTask}
                />
            ))}
            </div>
        </div>
        </section>
    )
    }

export default TasksSection