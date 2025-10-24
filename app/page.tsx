'use client';

import TodoInput from './components/TodoInput';
import { Todo } from './components/TodoItem';
import { useState } from 'react';
import TodoSectionList, { TodoSection } from './components/TodoSectionList';

export default function Home() {
  const [todos, setTodos] = useState<TodoSection[]>([]);

  const addTodo = (todo: Todo) => {
    const oldTodosSections = [...todos];
    if (oldTodosSections.length === 0) {
      setTodos([
        {
          title: 'Tasks to do',
          data: [todo],
          key: 'INCOMPLETE',
        },
        {
          title: 'Done',
          data: [],
          key: 'COMPLETED',
        },
      ]);
      return;
    }
    const newTodosSections = oldTodosSections.map<TodoSection>((todoSection) => {
      if (todoSection.key === 'INCOMPLETE') {
        return {
          ...todoSection,
          data: [...todoSection.data, todo],
        };
      }
      return todoSection;
    });
    setTodos(newTodosSections);
  };

  const completeTodo = (todoId: string) => {
    const oldTodosSections = [...todos];
    let newInCompletedTodos: Todo[] = [],
      newCompletedTodos: Todo[] = [];
    oldTodosSections.forEach((section) => {
      if (section.key === 'INCOMPLETE') {
        newInCompletedTodos = section.data.filter((todo) => todo.id !== todoId);
        newCompletedTodos = section.data
          .filter((todo) => todo.id === todoId)
          .map((todo) => {
            return { ...todo, isCompleted: true };
          });
      }
    });
    const newSections = oldTodosSections.map((section) => {
      if (section.key === 'INCOMPLETE') {
        return {
          ...section,
          data: newInCompletedTodos,
        };
      }
      return {
        ...section,
        data: [...section.data, ...newCompletedTodos],
      };
    });
    setTodos(newSections);
  };

  const deleteTodo = (todoId: string) => {
    const oldTodosSections = [...todos];
    const newTodosSections = oldTodosSections.map<TodoSection>((section) => {
      if (section.key === 'INCOMPLETE') {
        return {
          ...section,
          data: section.data.filter((todo) => todo.id !== todoId),
        };
      }
      return section;
    });
    setTodos(newTodosSections);
  };

  return (
    <section>
      <TodoInput addTodo={addTodo} />
      <TodoSectionList data={todos} onComplete={completeTodo} onDelete={deleteTodo} />
    </section>
  );
}
