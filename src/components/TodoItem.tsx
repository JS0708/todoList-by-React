import { type Todo } from '../types'; // Import the Todo type from App.tsx
// import './TodoItem.css'; // Optional: for item-specific styles

// Define props type. It receives one todo object and the functions
type TodoItemProps = {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  const { id, text, done } = todo;

  return (
    // Add 'done' class if the todo is completed (for CSS styling)
    <li className={`TodoItem ${done ? 'done' : ''}`}>
      {/* Checkbox to toggle 'done' status */}
      <input 
        type="checkbox" 
        checked={done} 
        onChange={() => onToggle(id)} 
      />
      {/* Todo text */}
      <span>{text}</span>
      {/* Button to delete the todo */}
      <button onClick={() => onDelete(id)}>X</button>
    </li>
  );
}