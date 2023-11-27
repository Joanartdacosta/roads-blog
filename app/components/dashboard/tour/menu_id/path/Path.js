import Info from "./Info";
import { useState } from "react";

export default function Path(props) {
  const [show, setShow] = useState(false);

  function seeMore() {
    setShow(!show);
  }

  return (
    <div>
      <h2 id="accordion-flush-heading-2">
        <button
          type="button"
          class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
          data-accordion-target="#accordion-flush-body-2"
          aria-expanded="false"
          aria-controls="accordion-flush-body-2"
          onClick={seeMore}
        >
          <span>{props.label}</span>
          <svg
            data-accordion-icon
            class="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>

        {show && <Info onClick={close} />}
      </h2>
    </div>
  );
}
