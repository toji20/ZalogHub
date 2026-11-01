import type { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <label className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />

        <span>{todo.text}</span>
      </label>

      <button
        className="delete-button"
        onClick={() => onDelete(todo.id)}
        aria-label="Удалить задачу"
        type="button"
      >
        ×
      </button>
    </div>
  );
}
