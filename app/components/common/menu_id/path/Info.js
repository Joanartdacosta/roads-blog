import Access from "./Access";

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
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              {props.tourPathDescription1 ? (
                <p>{props.tourPathDescription1}</p>
              ) : (
                <p>{props.tripPathDescription1}</p>
              )}
            </p>
            <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
              <li className="text-green-600 dark:text-green-500">
                {props.access}
              </li>
            </ul>
          </div>

          <Access
            image1={props.imagePath1}
            image11={props.imagePath11}
            image2={props.imagePath2}
            image21={props.imagePath21}
            image22={props.imagePath22}
            image23={props.imagePath23}
            image24={props.imagePath24}
            image25={props.imagePath25}
            image3={props.imagePath3}
          />
        </div>
      </div>
    </div>
  );
}
