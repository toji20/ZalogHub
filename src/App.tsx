import { TodoForm } from "./components/TodoForm";
import { TodoFilters } from "./components/TodoFilters";
import { TodoList } from "./components/TodoList";
import { useTodos } from "./hooks/useTodos";
import "./App.css";

function App() {
  const {
    todos,
    filteredTodos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
  } = useTodos();

  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <main className="app">
      <div className="todo-card">
        <header className="todo-header">
          <h1>Мои задачи</h1>
        </header>

        <TodoForm onAdd={addTodo} />

        <div className="todo-stats">
          <span>Всего: {todos.length}</span>
          <span>Выполнено: {completedCount}</span>
        </div>

        <TodoFilters filter={filter} onChange={setFilter} />

        <TodoList
          todos={filteredTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      </div>
    </main>
  );
}

export default App;
