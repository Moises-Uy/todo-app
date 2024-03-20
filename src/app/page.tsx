import { prisma } from "@/db";
import { TodoItem } from "./components/TodoItem";
import { redirect } from "next/navigation";

async function toggleTodo(id: string, complete: boolean) {
  "use server";
  await prisma.todo.update({ where: { id }, data: { complete } });
}
async function deleteTodo(id: string) {
  "use server";
  await prisma.todo.delete({ where: { id } });
  redirect("/");
}

export default async function Home() {
  const todos = await prisma.todo.findMany();

  if (todos.length === 0) {
    return (
      <div className="flex justify-center items-center">
        <p className="text-center">Create a new task!</p>
      </div>
    );
  }

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </>
  );
}
