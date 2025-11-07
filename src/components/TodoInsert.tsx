import { useState, type ChangeEvent, type FormEvent } from 'react';

// Define props type. It receives the 'onAdd' function from App.tsx
type TodoInsertProps = {
  onAdd: (text: string) => void;
};

export default function TodoInsert({ onAdd }: TodoInsertProps) {
  // Local state to manage the input value
  const [value, setValue] = useState('');

  // Update local state as the user types
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  // Handle form submission
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload
    const text = value.trim();
    if (!text) return; // Don't add empty todos

    // Call the onAdd function passed from App.tsx
    onAdd(text);
    
    // Clear the input field
    setValue('');
  };

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Add a new todo"
        required
      />
      <button type="submit">Add</button>
    </form>
  );
}