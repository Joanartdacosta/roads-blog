import Arrow from "@/components/common/icons/Arrow";
import Info from "./Info";
import { useState } from "react";

import PATH_OPTIONS_LABELS from "@/components/enums/path_options_labels";

export default function Path(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [info, setInfo] = useState(false);

  function handleEvent() {
    if (
      props.label == PATH_OPTIONS_LABELS.pathOption1 ||
      props.label == PATH_OPTIONS_LABELS.pathOption2 ||
      props.label == PATH_OPTIONS_LABELS.pathOption3 ||
      props.label == PATH_OPTIONS_LABELS.pathOption4
    ) {
      setInfo(
        <Info
          access={props.access}
          accessOption1={props.accessOption1}
          accessOption2={props.accessOption2}
          accessOption3={props.accessOption3}
          imagePath1={props.imagePath1}
          imagePath2={props.imagePath2}
          imagePath21={props.imagePath21}
          imagePath22={props.imagePath22}
          imagePath23={props.imagePath23}
          imagePath24={props.imagePath24}
          imagePath3={props.imagePath3}
          imagePath4={props.imagePath4}
          label={props.label}
          labelDescription={props.labelDescription}
        />
      );
      setIsOpen(isOpen);
    }
  }

  return (
    <div>
      <h2 id="accordion-flush-heading-2">
        <button
          aria-expanded="false"
          aria-controls="accordion-flush-body-2"
          className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
          data-accordion-target="#accordion-flush-body-2"
          onClick={handleEvent}
          type="button"
        >
          <div>
            <h2>{props.label}</h2>
          </div>

          <Arrow />
        </button>
      </h2>

      {info}
      {isOpen}
    </div>
  );
}
