export default function ButtonYellow2(props) {
  return (
    <button
      onClick={props.onClick}
      className="text-white hover:text-yellow-600 border border-yellow-600 bg-yellow-600 hover:bg-white focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
    >
      {props.label}
    </button>
  );
}
