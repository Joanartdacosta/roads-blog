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
        <div className="py-5 border-b border-gray-200 dark:border-gray-700">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            {current.description1}
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            {current.waydescription}
          </p>

          {current?.tourPathDescription ? (
            <div>
              {" "}
              <p className="mt-8 text-green-800 dark:text-gray-400">
                Percurso total do roteiro:
              </p>
              <p className="mb-2 mt-2 text-gray-800 dark:text-gray-400">
                {current.access}
              </p>{" "}
            </div>
          ) : (
            ""
          )}

          {current?.labelOption1Description ||
          current?.labelOption2Description ? (
            <div>
              <p className="mt-8 text-green-800 dark:text-gray-400">
                {current.labelDescription}
              </p>
              <p className="mb-2 mt-2 text-green-600 underline dark:text-gray-400">
                {current.labelOption1}
              </p>{" "}
              <p className="mb-2 mt-2 text-gray-600 dark:text-gray-400">
                {current.labelOption1Description}
              </p>
              <p className="mb-2 mt-2 text-green-600 underline dark:text-gray-400">
                {current.labelOption2}
              </p>{" "}
              <p className="mb-2 mt-2 text-gray-600 dark:text-gray-400">
                {current.labelOption2Description}
              </p>
            </div>
          ) : (
            ""
          )}
        </div>

        <Path
          access={current.accessOption1}
          label={PATH_OPTIONS_LABELS.pathOption1}
          labelDescription={current.labelOption1Description}
          tripPathDescription1={current.tripPathDescription1}
          imagePath1={current.imagePath1}
          imagePath11={current.imagePath11}
          page={props.page}
        />

        {current?.accessOption2 ||
        current?.labelOption2Description ||
        imagePath2 ? (
          <Path
            access={current.accessOption2}
            label={PATH_OPTIONS_LABELS.pathOption2}
            imagePath2={current.imagePath2}
            imagePath21={current.imagePath21}
            imagePath22={current.imagePath22}
            imagePath23={current.imagePath23}
            imagePath24={current.imagePath24}
            imagePath25={current.imagePath25}
            tourPathDescription1={current.tourPathDescription1}
            page={props.page}
          />
        ) : (
          ""
        )}
        {current?.accessOption3 ||
        current?.labelOption3Description ||
        current?.imagePath3 ? (
          <Path
            access={current.accessOption3}
            label={PATH_OPTIONS_LABELS.pathOption3}
            imagePath3={current.imagePath3}
            tourPathDescription1={current.tourPathDescription1}
            page={props.page}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
