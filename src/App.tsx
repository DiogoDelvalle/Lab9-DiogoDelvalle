import { useEffect } from 'react'
import type { Task } from './types'
import TaskInput from './componentes/TaskInput'
import TaskList from './componentes/TaskList'
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', [])

  const addTask = (text: string) => {
    const newTask: Task = {
      id: Date.now(),
      text,
      done: false
    }
    setTasks([newTask, ...tasks])
  }

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    )
  }

  const removeTask = (id: number) => {
    setTasks(tasks.filter((t) => t.id !== id))
  }

  const pendingCount = tasks.filter((t) => !t.done).length

  return (
    <div>
      <h1>📝 To-Do List</h1>
      <TaskInput onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} onRemove={removeTask} />
      <p>Tareas pendientes: {pendingCount}</p>
    </div>
  )
}

export default App
