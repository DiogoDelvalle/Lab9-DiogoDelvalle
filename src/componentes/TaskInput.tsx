import { useState } from 'react'

interface TaskInputProps {
  onAdd: (text: string) => void
}

export default function TaskInput({ onAdd }: TaskInputProps) {
  const [input, setInput] = useState('')

  const handleAdd = () => {
    const trimmed = input.trim()
    if (trimmed === '') return
    onAdd(trimmed)
    setInput('')
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Nueva tarea..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Agregar</button>
    </div>
  )
}
