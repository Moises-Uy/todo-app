"use client";

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
  deleteTodo: (id: string) => void;
};

export function TodoItem({
  id,
  title,
  complete,
  toggleTodo,
  deleteTodo,
}: TodoItemProps) {
  return (
    <li className="flex gap-1 items-center bg-gradient-to-l from-slate-700 to-slate-500 mb-1 rounded-full p-12">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-950 text-2xl pl-5"
      >
        {title}
      </label>
      <div className="flex-grow" />
      <button
        className="px-5 py-2.5 transition-all ease-in duration-75 text-slate-900 bg-white dark:bg-red-500 rounded-md hover:bg-opacity-70 hover:text-slate-100"
        onClick={() => deleteTodo(id)}
      >
        Delete Now
      </button>
    </li>
  );
}
