import React from 'react';

function TodoList({ todos, handleComplete }) {
  return (
    <div>
    <h2>Child Component</h2>
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </span>
          {!todo.completed && (
            <button onClick={() => handleComplete(todo.id)}>
              Complete
            </button>
          )}
        </li>
      ))}
    </ul>
    </div>
  );
}

export default TodoList;
