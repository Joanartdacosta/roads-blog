import PATH_OPTIONS_LABELS from "@/components/enums/path_options_labels";
import Path from "./Path";

export default function PathOptions(props) {
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
            {props.description1}
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            {props.waydescription}
          </p>

          {props.tourPathDescription ? (
            <div>
              {" "}
              <p className="mt-8 text-green-800 dark:text-gray-400">
                Percurso total do roteiro:
              </p>
              <p className="mb-2 mt-2 text-gray-800 dark:text-gray-400">
                {props.access}
              </p>{" "}
            </div>
          ) : (
            ""
          )}

          {props.labelOption1Description || props.labelOption2Description ? (
            <div>
              <p className="mt-8 text-green-800 dark:text-gray-400">
                {props.labelDescription}
              </p>
              <p className="mb-2 mt-2 text-green-600 underline dark:text-gray-400">
                {props.labelOption1}
              </p>{" "}
              <p className="mb-2 mt-2 text-gray-600 dark:text-gray-400">
                {props.labelOption1Description}
              </p>
              <p className="mb-2 mt-2 text-green-600 underline dark:text-gray-400">
                {props.labelOption2}
              </p>{" "}
              <p className="mb-2 mt-2 text-gray-600 dark:text-gray-400">
                {props.labelOption2Description}
              </p>
            </div>
          ) : (
            ""
          )}
        </div>

        <Path
          access={props.accessOption1}
          label={PATH_OPTIONS_LABELS.pathOption1}
          labelDescription={props.labelOption1Description}
          imagePath1={props.imagePath1}
          imagePath11={props.imagePath11}
          tourPathDescription1={props.tourPathDescription1}
        />

        {props.accessOption2 || props.labelOption2Description || imagePath2 ? (
          <Path
            access={props.accessOption2}
            label={PATH_OPTIONS_LABELS.pathOption2}
            imagePath2={props.imagePath2}
            imagePath21={props.imagePath21}
            imagePath22={props.imagePath22}
            imagePath23={props.imagePath23}
            imagePath24={props.imagePath24}
            imagePath25={props.imagePath25}
            tourPathDescription1={props.tourPathDescription1}
          />
        ) : (
          ""
        )}
        {props.accessOption3 ||
        props.labelOption3Description ||
        props.imagePath3 ? (
          <Path
            access={props.accessOption3}
            label={PATH_OPTIONS_LABELS.pathOption3}
            imagePath3={props.imagePath3}
            tourPathDescription1={props.tourPathDescription1}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
