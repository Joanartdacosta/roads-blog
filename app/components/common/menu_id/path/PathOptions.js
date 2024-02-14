import PATH_OPTIONS_LABELS from "@/components/enums/path_options_labels";
import Path from "./Path";
import { useSelector } from "react-redux";

export default function PathOptions(props) {
  let current = null;
  if (props.page === "trip") {
    current = useSelector((state) => state.trip.selectedTrip);
  } else if (props.page === "tour") {
    current = useSelector((state) => state.tour.selectedTour);
  }

  return (
    <div
      className="p-8 bg-white rounded-lg dark:bg-gray-800"
      id="faq"
      role="tabpanel"
      aria-labelledby="faq-tab"
    >
      <div
        id="accordion-flush"
        data-accordion="collapse"
        data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
        data-inactive-classes="text-gray-500 dark:text-gray-400"
      >
        {current?.description3 ? (
          <div className="py-5 border-b border-gray-200 dark:border-gray-700">
            {current.description3.map((description) => {
              return (
                <div key={description}>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    {description}
                  </p>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}

        {current?.optionDescription ? (
          <div>
            <p className="mb-2 mt-8 text-green-600 underline dark:text-gray-400">
              {current.options[0]}
            </p>{" "}
            <p className="mb-8 mt-2 text-gray-600 dark:text-gray-400 mb-10">
              {current.optionDescription[0]}
            </p>
            <p className="mb-2 mt-2 text-green-600 underline dark:text-gray-400">
              {current.options[1]}
            </p>{" "}
            <p className="mb-8 mt-2 text-gray-600 dark:text-gray-400 mb-10">
              {current.optionDescription[1]}
            </p>
          </div>
        ) : (
          ""
        )}

        <p className="mb-2 text-gray-500 dark:text-gray-400">
          {props.pathDescription}
        </p>

        <Path
          access={current?.accessOption[0]}
          label={PATH_OPTIONS_LABELS.pathOption1}
          pathDescription={current?.pathDescription}
          imagePath1={current?.imagePath1}
          page={props.page}
        />

        {current?.accessOption[1] || current.imagePath2 ? (
          <Path
            access={current.accessOption[1]}
            label={PATH_OPTIONS_LABELS.pathOption2}
            imagePath2={current.imagePath2}
            pathDescription={current.pathDescription}
            page={props.page}
          />
        ) : (
          ""
        )}

        {current?.accessOption[2] || current?.imagePath3 ? (
          <Path
            access={current.accessOption[2]}
            label={PATH_OPTIONS_LABELS.pathOption3}
            imagePath3={current.imagePath3}
            pathDescription={current.pathDescription}
            page={props.page}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
