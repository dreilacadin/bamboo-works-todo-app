export default function Tabs() {
  return (
    <ul className="flex w-full flex-wrap justify-evenly border-b border-gray-200 text-center text-sm font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400">
      <li className="me-2">
        <a
          href="#"
          aria-current="page"
          className="active inline-block rounded-t-lg bg-gray-100 p-4 text-blue-600 dark:bg-gray-800 dark:text-blue-500"
        >
          All Taks
        </a>
      </li>
      <li className="me-2">
        <a
          href="#"
          className="inline-block rounded-t-lg p-4 hover:bg-gray-50 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300"
        >
          Pending
        </a>
      </li>
      <li className="me-2">
        <a
          href="#"
          className="inline-block rounded-t-lg p-4 hover:bg-gray-50 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300"
        >
          In Progress
        </a>
      </li>
      <li className="me-2">
        <a
          href="#"
          className="inline-block rounded-t-lg p-4 hover:bg-gray-50 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300"
        >
          Completed
        </a>
      </li>
    </ul>
  );
}
