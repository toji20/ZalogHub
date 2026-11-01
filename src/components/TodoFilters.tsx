import type { FilterType } from "../types/todo";

interface TodoFiltersProps {
  filter: FilterType;
  onChange: (filter: FilterType) => void;
}

const filters: { label: string; value: FilterType }[] = [
  { label: "Все", value: "all" },
  { label: "Активные", value: "active" },
  { label: "Выполненные", value: "completed" },
];

export function TodoFilters({ filter, onChange }: TodoFiltersProps) {
  return (
    <div className="todo-filters">
      {filters.map((item) => (
        <button
          key={item.value}
          className={filter === item.value ? "active" : ""}
          onClick={() => onChange(item.value)}
          type="button"
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
