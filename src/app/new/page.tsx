import Link from "next/link";
import { prisma } from "@/db";
import { redirect } from "next/navigation";

async function createTodo(data: FormData) {
  "use server";

  const title = data.get("title")?.valueOf();
  if (typeof title != "string" || title.length === 0) {
    throw new Error("Invalid Title");
  }
  await prisma.todo.create({ data: { title, complete: false } });
  redirect("/");
}

const New = () => {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">New To do</h1>
      </header>
      <form action={createTodo} className="flex gap-2 flex-col">
        <input
          type="text"
          name="title"
          className="border border-slate-400 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100 "
        />
        <div className="flex gap-1 justify-end">
          <Link
            href=".."
            className="px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md hover:bg-opacity-70 hover:border"
          >
            Cancel
          </Link>

          <button
            type="submit"
            className="px-5 py-2.5 transition-all ease-in duration-75 text-slate-900 bg-white dark:bg-green-500 rounded-md hover:bg-opacity-70 hover:border hover:text-slate-100"
          >
            Add
          </button>
        </div>
      </form>
    </>
  );
};
export default New;
