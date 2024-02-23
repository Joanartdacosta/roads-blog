import Arrow from "@/components/common/icons/Arrow";
import Info from "@/components/common/menu_id/path/Info";
import PATH_OPTIONS_LABELS from "@/components/enums/path_options_labels";
import { useState } from "react";

export default function Path(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [info, setInfo] = useState(false);

  function handleOpen() {
    if (
      props.label == PATH_OPTIONS_LABELS.pathOption1 ||
      props.label == PATH_OPTIONS_LABELS.pathOption2 ||
      props.label == PATH_OPTIONS_LABELS.pathOption3
    ) {
      setInfo(<Info access={props.access} />);
      setIsOpen(!isOpen);
    }
  }

  return (
    <div onClick={handleOpen}>
      <h2 id="accordion-flush-heading-2">
        <button
          aria-expanded={isOpen}
          aria-controls="accordion-flush-body-2"
          className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
          data-accordion-target="#accordion-flush-body-2"
          type="button"
        >
          <div>
            <h2 className="text-lg">{props.label}</h2>
          </div>

          <Arrow isOpen={isOpen} />
        </button>
      </h2>

      {info}
      {isOpen}
    </div>
  );
}
