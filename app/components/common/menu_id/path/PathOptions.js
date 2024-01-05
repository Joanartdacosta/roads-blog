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
        </div>
        <Path
          label={props.labelOption1}
          labelOption1Description={props.labelOption1Description}
        />
        <Path
          label={props.labelOption2}
          labelOption2Description={props.labelOption2Description}
        />
        <Path
          label={props.labelOption3}
          labelOption3Description={props.labelOption3Description}
        />
        <Path
          label={props.labelOption3}
          labelOption4Description={props.labelOption4Description}
        />
      </div>
    </div>
  );
}
