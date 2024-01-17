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

          <p className="mt-8 text-green-800 dark:text-gray-400">
            Percurso total do roteiro:
          </p>
          <p className="mb-2 mt-2 text-gray-800 dark:text-gray-400">
            {props.access}
          </p>
        </div>
        <Path
          access={props.accessOption1}
          label={PATH_OPTIONS_LABELS.pathOption1}
          labelDescription={props.labelOption1Description}
          imagePath1={props.imagePath1}
          imagePath11={props.imagePath11}
        />

        {props.accessOption2 ||
        props.labelOption2Description ||
        imagePath2 ||
        imagePath21 ||
        imagePath22 ||
        imagePath23 ||
        imagePath24 ? (
          <Path
            access={props.accessOption2}
            label={PATH_OPTIONS_LABELS.pathOption2}
            labelDescription={props.labelOption2Description}
            imagePath2={props.imagePath2}
            imagePath21={props.imagePath21}
            imagePath22={props.imagePath22}
            imagePath23={props.imagePath23}
            imagePath24={props.imagePath24}
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
            labelDescription={props.labelOption3Description}
            imagePath3={props.imagePath3}
            imagePath31={props.imagePath31}
          />
        ) : (
          ""
        )}

        {props.pathOption4 ||
        props.labelOption4Description ||
        props.imagePath4 ? (
          <Path
            access={props.accessOption4}
            label={PATH_OPTIONS_LABELS.pathOption4}
            labelDescription={props.labelOption4Description}
            imagePath4={props.imagePath4}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
