export default function ButtonYellow(props) {
  if (props.href) {
    return (
      <a
        href={props.href}
        className="play opacity-80 text-white hover:text-yellow-600 border border-yellow-600 bg-yellow-600 hover:bg-white focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
        target="_blank"
      >
        <button>{props.label}</button>
      </a>
    );
  }

  return (
    <button
      onClick={props.onClick}
      target="_blank"
      className="play text-white hover:text-yellow-600 border border-yellow-600 bg-yellow-600 hover:bg-white focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
    >
      {props.label}
    </button>
  );
}
