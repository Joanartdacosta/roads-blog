import PATH_OPTIONS_LABELS from "@/components/enums/path_options_labels";
import Path from "./Path";

export default function PathOptions(props) {
  return (
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
      >
        <div class="py-5 border-b border-gray-200 dark:border-gray-700">
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            {props.description1}
          </p>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            {props.waydescription}
          </p>
        </div>
        <Path
          label={PATH_OPTIONS_LABELS.pathOption1}
          access={props.access}
          wayoption1={props.wayoption1}
        />
        <Path
          label={PATH_OPTIONS_LABELS.pathOption2}
          access={props.access}
          wayoption2={props.wayoption2}
        />
        <Path
          label={PATH_OPTIONS_LABELS.pathOption3}
          access={props.access}
          wayoption3={props.wayoption3}
        />
        <Path label={PATH_OPTIONS_LABELS.pathOption4} access={props.access} />
      </div>
    </div>
  );
}
