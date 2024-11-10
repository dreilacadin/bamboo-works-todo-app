import { create } from "zustand";
import { type State, type Task } from "~/types";

// Dummy todo just for something to see in UI when  page is reloaded as we don't have a database yet
const initialState: Task[] = [
  {
    id: 1,
    title: "Wash the dishes",
    description: "Clear the dishes in the sink",
    status: "pending",
  },
  {
    id: 2,
    title: "Do the laundry",
    description: "Time to use those suds!",
    status: "in progress",
  },
];

const useTodoStore = create<State>()((set) => ({
  todos: initialState,
  addTodo: (task) =>
    set((state) => ({
      ...state,
      todos: [
        ...state.todos,
        {
          id: state.todos.length + 1,
          title: task.title,
          description: task.description,
          status: "pending",
        },
      ],
    })),
  editTodo: (task) =>
    set((state) => ({
      todos: state.todos.map((todo) => {
        if (todo.id === task.id) {
          return {
            ...todo,
            title: task.title,
            description: task.description,
            status: task.status,
          };
        }
        return todo;
      }),
    })),
  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}));

export default useTodoStore;
