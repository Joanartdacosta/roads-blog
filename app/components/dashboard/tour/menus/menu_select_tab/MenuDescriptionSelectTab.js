export default function MenuDescriptionSelectTab(props) {
  return (
    <div class="sm:hidden">
      <label for="tabs" class="sr-only">
        Select tab
      </label>
      <select
        id="tabs"
        class="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option>{props.option1}</option>
        <option>{props.option2}</option>
      </select>
    </div>
  );
}
