import { type Todo } from '../types'; // Import the Todo type from App.tsx
import TodoItem from './TodoItem'; // Import the child component

// Define props type. It receives the list and functions from App.tsx
type TodoListProps = {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

export default function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  return (
    <ul className="TodoList">
      {/* Map over the todos array to create a TodoItem for each one */}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id} // React requires a unique 'key' for list items
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}