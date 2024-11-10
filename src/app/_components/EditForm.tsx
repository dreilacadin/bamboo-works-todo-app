"use client";

import { useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";
import useTodoStore from "~/store";
import { Task } from "~/types";

export default function EditForm({ id }: { id: number }) {
  const { todos } = useTodoStore();
  const todo = todos.filter((todo) => todo.id == id)[0];
  const [task, setTask] = useState<Task>(todo!);
  const { editTodo } = useTodoStore();
  const router = useRouter();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    editTodo(task);
    router.push("/");
  }

  if (!todo) return null;

  return (
    <form className="w-full space-y-4" action="#" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="title"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
          placeholder="Document component"
          value={task.title}
          onChange={(e) =>
            setTask({
              ...task,
              title: e.target.value,
            })
          }
          required
        />
      </div>
      <div>
        <label
          htmlFor="description"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Description
        </label>
        <input
          type="text"
          name="description"
          id="description"
          placeholder="Write good component documentation"
          value={task.description}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
          onChange={(e) =>
            setTask({
              ...task,
              description: e.target.value,
            })
          }
          required
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
}
