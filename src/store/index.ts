import cuid from "cuid";
import { create } from "zustand";
import { type State, type Task } from "~/types";

// Dummy todo just for something to see in UI when  page is reloaded as we don't have a database yet
const initialTodo: Task = {
  id: cuid(),
  title: "Wash the dishes",
  description: "Clear the dishes in the sink",
  status: "pending",
};

const useTodoStore = create<State>()((set) => ({
  todos: [initialTodo],
  addTodo: (task) =>
    set((state) => ({
      ...state,
      todos: [
        ...state.todos,
        {
          id: cuid(),
          title: task.title,
          description: task.description,
          status: "pending",
        },
      ],
    })),
}));

export default useTodoStore;
