/** This is an individual todo list item row */
"use client";

import { useState } from "react";
import EditTodoModal from "~/app/_components/EditTodoModal";
import TodoStatus from "~/app/_components/TodoStatus";
import useTodoStore from "~/store";
import { Task } from "~/types";

export default function TodoItem({ todo }: { todo: Task }) {
  const { deleteTodo } = useTodoStore();

  return (
    <>
      <tr
        key={todo.id}
        className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
      >
        <td className="w-4 p-4">
          <div className="flex items-center">
            <input
              id="checkbox-table-search-1"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
            />
            <label htmlFor="checkbox-table-search-1" className="sr-only">
              checkbox
            </label>
          </div>
        </td>
        <th
          scope="row"
          className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
        >
          {todo.title}
        </th>
        <td className="px-6 py-4">{todo.description}</td>
        <td className="px-6 py-4">
          <TodoStatus status={todo.status} />
        </td>
        <td className="flex items-center justify-center space-x-4 px-6 py-4">
          <a
            href={`/edit/${todo.id}`}
            className="font-medium text-blue-600 hover:underline"
          >
            Edit
          </a>

          <button
            className="font-medium text-red-600 hover:underline"
            onClick={() => {
              if (!confirm("Are you sure you want to delete this task?"))
                return;

              deleteTodo(todo.id);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}
