/** Todo List Types and interfaces */
export interface Task {
  id: number;
  title: string;
  description: string;
  status: Status;
}

export interface State {
  todos: Task[];
  addTodo: (task: Task) => void;
  editTodo: (task: Task) => void;
  deleteTodo: (id: number) => void;
}

export type Status = "pending" | "in progress" | "completed";
