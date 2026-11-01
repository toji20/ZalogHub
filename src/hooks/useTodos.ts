import { useEffect, useState } from "react";
import type { Todo, FilterType } from "../types/todo";

const STORAGE_KEY = "zaloghub-todos";

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [filter, setFilter] = useState<FilterType>("all");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const trimmed = text.trim();

    if (!trimmed) return;

    setTodos((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        text: trimmed,
        completed: false,
      },
    ]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return {
    todos,
    filteredTodos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
  };
}
