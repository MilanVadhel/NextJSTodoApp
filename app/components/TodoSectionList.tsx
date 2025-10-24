import TodoItem, { Todo } from './TodoItem';

export type TodoSection = {
  title: string;
  data: Todo[];
  key: 'COMPLETED' | 'INCOMPLETE';
};

type TodoSectionListProps = {
  data: TodoSection[];
  onComplete: (todoId: string) => void;
  onDelete: (todoId: string) => void;
};

function TodoSectionList({ data, onComplete, onDelete }: TodoSectionListProps) {
  return (
    <div className="mt-14">
      {data.map((section, index) => {
        return section.data.length > 0 ? (
          <div className={index !== data.length - 1 ? 'mb-14' : ''} key={section.key}>
            <span className="text-base text-white">
              {section.title} - {section.data.length}
            </span>
            <div className="mt-4">
              {section.data.map((todo) => {
                return (
                  <TodoItem key={todo.id} todo={todo} onComplete={onComplete} onDelete={onDelete} />
                );
              })}
            </div>
          </div>
        ) : null;
      })}
    </div>
  );
}

export default TodoSectionList;
