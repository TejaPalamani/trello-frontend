// components/TodoBoard.tsx
import React, { useState } from 'react';
import { IoAddCircleOutline } from 'react-icons/io5';

export type Status = 'todo' | 'progress' | 'under review' | 'finished';
export type Priority = 'urgent' | 'low' | 'medium';

export interface Todo {
  id: string;
  status: Status;
  priority: Priority;
  calendar: string;
  description: string;
}

interface TodoBoardProps {
  todos: Todo[];
}

const statuses: Status[] = ['todo', 'progress', 'under review', 'finished'];

const TodoBoard: React.FC<TodoBoardProps> = ({ todos }) => {
  const [todoItems, setTodoItems] = useState(todos);

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    todoId: string
  ) => {
    e.dataTransfer.setData('todoId', todoId);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, status: Status) => {
    e.preventDefault();
    const todoId = e.dataTransfer.getData('todoId');
    const updatedTodos = todoItems.map((todo) =>
      todo.id === todoId ? { ...todo, status } : todo
    );
    setTodoItems(updatedTodos);

    // Call your API to update the status on the backend
    // fetch('/api/update-todo-status', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ id: todoId, status }),
    // });
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div className="flex space-x-4">
      {statuses.map((status) => (
        <div
          key={status}
          className="w-1/4 p-4 bg-gray-200 rounded-lg"
          onDrop={(e) => handleDrop(e, status)}
          onDragOver={handleDragOver}
        >
          <h2 className="text-xl font-bold">{status}</h2>
          {todoItems
            .filter((todo) => todo.status === status)
            .map((todo) => (
              <div
                key={todo.id}
                draggable
                onDragStart={(e) => handleDragStart(e, todo.id)}
                className="bg-white p-2 my-2 rounded shadow-md"
              >
                <p className="font-semibold">{todo.description}</p>
                <p className="text-sm text-gray-600">{todo.priority}</p>
                <p className="text-xs text-gray-400">{todo.calendar}</p>
              </div>
            ))}
          <button
            type="button"
            className="flex flex-row justify-between items-center bg-blue-600 rounded text-white text-xs transition hover:text-black hover:bg-white p-2 h-9 w-full"
          >
            Create a new task
            <i className="text-xl w-5 h-5 m-1">
              <IoAddCircleOutline className="text-white transition hover:text-black" />
            </i>
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoBoard;
