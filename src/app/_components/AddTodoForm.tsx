"use client";

import { type FormEvent, useState } from "react";
import Modal from "~/components/Modal";
import useTodoStore from "~/store";
import { type Task } from "~/types";

export default function AddTaskForm() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [newTask, setNewTask] = useState<Task>({
    id: "",
    title: "",
    description: "",
    status: "pending",
  });

  const { addTodo } = useTodoStore();

  function closeModal() {
    return setShowModal(false);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    /** If newTask title and descriptions are not empty, add it to global state */
    if (!!newTask.title.length && !!newTask.description.length) {
      addTodo(newTask);
    }

    setShowModal(false);
  }

  return (
    <>
      <button
        type="button"
        className="me-2 whitespace-nowrap rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => setShowModal(true)}
      >
        Add task
      </button>

      {showModal && (
        <Modal title="Add Task" closeModal={closeModal}>
          <form className="space-y-4" action="#" onSubmit={handleSubmit}>
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
                onChange={(e) =>
                  setNewTask({
                    ...newTask,
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
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                onChange={(e) =>
                  setNewTask({
                    ...newTask,
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
        </Modal>
      )}
    </>
  );
}
