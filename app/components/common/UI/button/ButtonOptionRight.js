export default function ButtonOptionRight(props) {
  return (
    <div>
      <button
        onClick={props.onClick}
        type="button"
        className="border rounded-r-md px-4 py-2 text-sm font-medium text-gray-900 bg-white border-gray-200 hover:bg-gray-100 hover:text-yellow-700 focus:z-10 focus:ring-2 focus:ring-yellow-700 focus:text-yellow-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-yellow-500 dark:focus:text-white"
      >
        {props.label}
      </button>
    </div>
  );
}
