import AddTaskForm from "~/app/_components/AddTaskForm";
import TodoList from "~/app/_components/TodoList";
import Tabs from "~/components/Tabs";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex max-w-2xl flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="border-b border-gray-200 pb-6 text-3xl font-extrabold tracking-tight text-white sm:text-[3rem]">
          Bamboo Works <span className="text-[hsl(280,100%,70%)]">ToDo</span>{" "}
          App
        </h1>
        {/* Main Todo App content */}
        <Tabs />
        {/* TaskInput */}
        <div className="flex w-full flex-col items-center justify-end space-x-4">
          <AddTaskForm />
          <TodoList />
        </div>
      </div>
    </main>
  );
}
