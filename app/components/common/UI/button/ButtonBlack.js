export default function ButtonBlack(props) {
  if (props.href) {
    return (
      <button
        href={props.href}
        className="play text-white border opacity-80 border-gray-900 border bg-black hover:bg-gray-100 hover:text-black focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium text-xl px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
      >
        {props.label}
      </button>
    );
  }

  return (
    <button
      onClick={props.onClick}
      className="play text-white border border-gray-900 border bg-black hover:bg-gray-100 hover:text-black focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium text-xl px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
    >
      {props.label}
    </button>
  );
}
