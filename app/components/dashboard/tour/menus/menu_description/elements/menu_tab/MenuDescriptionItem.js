import BlueBullet from "@/components/common/icons/bullets/BLueBullet";
import { useState } from "react";

export default function MenuDescriptionItem(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [info, setInfo] = useState("Initial information");

  function toogleInfo() {
    setIsOpen(!isOpen);
    setInfo(isOpen ? <MenuDescriptionItem /> : "nothing");
  }

  return (
    <div>
      <li class="w-full">
        <button
          id={props.id}
          data-tabs-target={props.href}
          type="button"
          role="tab"
          aria-controls={props.id}
          aria-selected="true"
          class="inline-block w-full p-4 rounded-tl-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
          onClick={toogleInfo}
        >
          {props.label}
        </button>
        {isOpen && <BlueBullet />}
      </li>
    </div>
  );
}
