export default function LightButton(props) {
  return (
    <button
      onClick={props.onClick}
      class="text-white bg-black focus:outline-none hover:bg-gray-100 hover:text-black  font-medium text-lg px-5 py-2.5 mr-2 mb-2 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
    >
      {props.label}
    </button>
  );
}
