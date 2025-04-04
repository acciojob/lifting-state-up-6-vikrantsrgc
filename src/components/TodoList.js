import React from 'react';

function TodoList({ todos, handleComplete }) {
  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li key={todo.id} className="flex justify-between items-center p-2 border rounded">
          <span className={todo.completed ? 'line-through text-gray-400' : ''}>
            {todo.text}
          </span>
          {!todo.completed && (
            <button
              onClick={() => handleComplete(todo.id)}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              Complete
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
