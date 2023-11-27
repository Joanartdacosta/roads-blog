import Arrow from "@/components/common/icons/Arrow";
import Info from "./Info";
import { useState } from "react";

export default function Path(props) {
  const [show, setShow] = useState(false);

  function setVisible() {
    setShow(!show);
  }

  return (
    <div>
      <h2 id="accordion-flush-heading-2">
        <button
          aria-expanded="false"
          aria-controls="accordion-flush-body-2"
          class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
          data-accordion-target="#accordion-flush-body-2"
          onClick={setVisible}
          type="button"
        >
          <span>{props.label}</span>
          <Arrow />
        </button>

        {show && <Info onClick={close} />}
      </h2>
    </div>
  );
}
