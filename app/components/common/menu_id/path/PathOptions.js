import PATH_OPTIONS_LABELS from "@/components/enums/path_options_labels";
import Info from "./Info";
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
        <Info
          waydescription={props.waydescription}
          description={props.description}
        />
        <Path label={PATH_OPTIONS_LABELS.pathOption1} access={props.access} />
        <Path label={PATH_OPTIONS_LABELS.pathOption2} access={props.access} />
        <Path label={PATH_OPTIONS_LABELS.pathOption3} access={props.access} />
        <Path label={PATH_OPTIONS_LABELS.pathOption4} access={props.access} />
      </div>
    </div>
  );
}
