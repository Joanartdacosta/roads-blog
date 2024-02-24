import Access from "@/components/common/menu_id/path/Access";

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
          <div className="py-5 border-b border-gray-200 dark:border-gray-700 ">
            <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400 text-left">
              <li className="text-green-600 dark:text-green-500">
                {props.access}
              </li>
            </ul>
          </div>

          <Access page="trip" />
        </div>
      </div>
    </div>
  );
}
