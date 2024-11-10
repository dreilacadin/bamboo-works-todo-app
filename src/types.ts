/** Todo List Types and interfaces */
export interface Task {
  id: string;
  title: string;
  description: string;
  status: Status;
}

export interface State {
  todos: Task[];
  addTodo: (task: Task) => void;
}

export type Status = "pending" | "in progress" | "completed";
