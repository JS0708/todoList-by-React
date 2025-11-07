import { useRef, useState } from 'react';
import './App.css'; // We will add styles here later
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import { type Todo } from './types'; //import { Todo } from './types'; => doesn't work... why is it..?

export default function App() {
  // State for the todo list
  const [todos, setTodos] = useState<Todo[]>([]);
  
  const nextId = useRef(1);
  // Function to add a new todo
  const handleAdd = (text: string) => {
    // Add the new todo to the list (immutable update)
    setTodos((prev) => [
      ...prev,
      { id: nextId.current++, text, done: false },
    ]);
  };

  // Function to toggle a todo's 'done' status
  const handleToggle = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  // Function to delete a todo
  const handleDelete = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <TodoTemplate>
      <h1>Todo List</h1>
      {/* Pass the add function to the Insert component */}
      <TodoInsert onAdd={handleAdd} />
      {/* Pass the list and helper functions to the List component */}
      <TodoList
        todos={todos}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
    </TodoTemplate>
  );
}