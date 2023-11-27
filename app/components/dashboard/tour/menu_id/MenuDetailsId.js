import InfoBullets from "./general_info/InfoBullets";
import GeneralSection from "./general_info/GeneralSection";
import MenuItem from "./MenuItem";
import TAB_BUTTONS from "@/components/lists/TabButton";
import { useState } from "react";
import PathOptions from "./path/PathOptions";

export default function MenuDetailsId() {
  const [isOpen, setIsOpen] = useState(false);
  const [info, setInfo] = useState(<GeneralSection />);

  function handleEvent(event) {
    const label = event.target.value;

    if (label == "Informacoes gerais") {
      setInfo(<GeneralSection />);
      setIsOpen(!isOpen);
    }

    if (label == "Como chegar - trajectos") {
      setInfo(<PathOptions />);
      setIsOpen(!isOpen);
    }

    if (label == "Dicas") {
      setInfo(<InfoBullets />);
      setIsOpen(!isOpen);
    }
  }

  return (
    <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-center">
        <ul
          class="text-ms font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400"
          id="fullWidthTab"
          data-tabs-toggle="#fullWidthTabContent"
          role="tablist"
        >
          {TAB_BUTTONS.map((button) => {
            return (
              <MenuItem
                href={button.href}
                id={button.id}
                label={button.label}
                value={button.label}
                onClick={handleEvent}
              />
            );
          })}
        </ul>
      </div>
      {info}
      {isOpen && info}
    </div>
  );
}
