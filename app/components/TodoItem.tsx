import { MdOutlineDone } from 'react-icons/md';
import { RiDeleteBin7Line } from 'react-icons/ri';

export type Todo = {
  id: string;
  text: string;
  isCompleted: boolean;
};

type TodoItemProps = {
  todo: Todo;
  onComplete: (todoId: string) => void;
  onDelete: (todoId: string) => void;
};

function TodoItem({ todo, onComplete, onDelete }: TodoItemProps) {
  const { isCompleted, text, id } = todo;
  return (
    <div className="rounded-lg py-5 px-5  bg-light-gray mt-4 flex flex-row items-center">
      <span
        className={`${isCompleted ? 'text-light-green line-through' : 'text-light-purple'} flex flex-1 text-base`}
      >
        {text}
      </span>
      {!isCompleted ? (
        <div className="gap-4 flex flex-row">
          <button onClick={() => onComplete(id)}>
            <MdOutlineDone className="fill-light-purple hover:fill-purple" size={22} />
          </button>

          <button onClick={() => onDelete(id)}>
            <RiDeleteBin7Line className="fill-light-purple hover:fill-purple" size={22} />
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default TodoItem;
