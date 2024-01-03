export default function Tips(props) {
  return (
    <div>
      <div
        class="p-4 bg-white rounded-lg dark:bg-gray-800"
        id="faq"
        role="tabpanel"
        aria-labelledby="faq-tab"
      >
        <div
          id="accordion-flush"
          data-accordion="collapse"
          data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
          data-inactive-classes="text-gray-500 dark:text-gray-400"
        ></div>
        <div
          id="accordion-flush-body-3"
          aria-labelledby="accordion-flush-heading-3"
        >
          <div class="py-5 border-b border-gray-200 dark:border-gray-700">
            <p class="mb-2 text-gray-500 dark:text-gray-400">Restaurantes:</p>
            <ul class="pl-5 text-gray-500 list-disc dark:text-gray-400">
              <li className="text-green-600 dark:text-green-500 hover:underline ">
                {props.restaurant1}
              </li>
            </ul>
          </div>
          <div class="py-5 border-b border-gray-200 dark:border-gray-700">
            <p class="mb-2 text-gray-500 dark:text-gray-400">Alojamentos:</p>
            <ul class="pl-5 text-gray-500 list-disc dark:text-gray-400">
              <li className="text-green-600 dark:text-green-500 hover:underline">
                {props.hotel1}
              </li>
              <li className="text-green-600 dark:text-green-500 hover:underline">
                {props.hotel2}
              </li>
              <li className="text-green-600 dark:text-green-500 hover:underline">
                {props.hotel3}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
