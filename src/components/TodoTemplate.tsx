import React from 'react';
// import './TodoTemplate.css'; // Optional: for template-specific styles

// Define props type. 'children' will be whatever is inside <TodoTemplate> in App.tsx
type TodoTemplateProps = {
  children: React.ReactNode;
};

export default function TodoTemplate({ children }: TodoTemplateProps) {
  // This div acts as the main container for the app
  return <div className="TodoTemplate">{children}</div>;
}