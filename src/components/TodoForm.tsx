import { useState } from "react";

interface TodoFormProps {
  onAdd: (text: string) => void;
}

export function TodoForm({ onAdd }: TodoFormProps) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!value.trim()) return;

    onAdd(value);
    setValue("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Что нужно сделать?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button type="submit" disabled={!value.trim()}>
        Добавить
      </button>
    </form>
  );
}