export default function Info(props) {
  return (
    <div>
      <div
        className="p-4 bg-white rounded-lg dark:bg-gray-800"
        id="faq"
        role="tabpanel"
        aria-labelledby="faq-tab"
      >
        <div
          id="accordion-flush-body-3"
          aria-labelledby="accordion-flush-heading-3"
        >
          <div className="py-5 border-b border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">Percurso</p>
            <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
              <li className="text-green-600 dark:text-green-500 hover:underline ">
                {props.labelOption1Description}
              </li>
            </ul>
          </div>
          <div className="py-5 border-b border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Alojamentos:
            </p>
            <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
              <li className="text-green-600 dark:text-green-500 hover:underline">
                {props.labelOption1Description}
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
