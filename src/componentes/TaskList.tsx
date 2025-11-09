import type { Task } from '../types'

interface TaskListProps {
  tasks: Task[]
  onToggle: (id: number) => void
  onRemove: (id: number) => void
}

export default function TaskList({ tasks, onToggle, onRemove }: TaskListProps) {
  if (tasks.length === 0) return <p>No hay tareas aún.</p>

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span
            onClick={() => onToggle(task.id)}
            style={{
              textDecoration: task.done ? 'line-through' : 'none',
              cursor: 'pointer'
            }}
          >
            {task.text}
          </span>
          <button onClick={() => onRemove(task.id)}>x</button>
        </li>
      ))}
    </ul>
  )
}
