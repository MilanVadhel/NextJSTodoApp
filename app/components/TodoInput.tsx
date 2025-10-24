'use client';

import { useState } from 'react';
import { Todo } from './TodoItem';

type TodoInputProps = {
  addTodo: (todo: Todo) => void;
};

function TodoInput({ addTodo }: TodoInputProps) {
  const [todo, setTodo] = useState<Todo>({
    id: '',
    text: '',
    isCompleted: false,
  });

  const handleAddTodo = () => {
    if (!todo.text) {
      return;
    }
    const newTodo: Todo = {
      id: new Date().toString(),
      text: todo.text,
      isCompleted: false,
    };
    addTodo(newTodo);
    setTodo(() => {
      return {
        id: '',
        text: '',
        isCompleted: false,
      };
    });
  };

  const handleTodoInputChange = (event: any) => {
    setTodo((prev) => {
      return {
        ...prev,
        text: event.target.value,
      };
    });
  };

  return (
    <div className="flex-row flex-1 flex gap-2">
      <input
        className="px-3 py-2 border rounded-lg border-purple text-white placeholder-gray text-base flex-1 focus:outline focus:border-light-purple"
        placeholder="Add a new task"
        value={todo.text}
        onChange={handleTodoInputChange}
      />
      <button
        className="bg-light-purple rounded-lg px-3 py-2 text-white text-base"
        onClick={handleAddTodo}
      >
        Add
      </button>
    </div>
  );
}

export default TodoInput;
