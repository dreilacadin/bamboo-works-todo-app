import AddTodoForm from "~/app/_components/AddTodoForm";
import TodoList from "~/app/_components/TodoList";
import Tabs from "~/components/Tabs";

export default function HomePage() {
  return (
    <>
      <h1 className="border-b border-gray-200 pb-6 text-3xl font-extrabold tracking-tight text-white sm:text-[3rem]">
        Bamboo Works <span className="text-[hsl(280,100%,70%)]">ToDo</span> App
      </h1>
      {/* Main Todo App content */}
      <Tabs />
      {/* TaskInput */}
      <div className="flex w-full flex-col items-center justify-end space-x-4">
        <AddTodoForm />
        <TodoList />
      </div>
    </>
  );
}
