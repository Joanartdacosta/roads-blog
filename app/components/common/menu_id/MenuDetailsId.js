import GeneralSection from "./general_info/GeneralSection";
import Map from "./location/Map";
import MenuItem from "./MenuItem";
import PathOptions from "./path/PathOptions";
import Points from "@/components/common/menu_id/location/Points";
import TAB_BUTTONS from "@/components/lists/TabButton";
import TAB_BUTTONS_LABELS from "@/components/enums/tab_buttons_labels";
import Tips from "./general_info/Tips";
import { useState } from "react";

export default function MenuDetailsId(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [info, setInfo] = useState(
    <div>
      {" "}
      <GeneralSection page={props.page} />
    </div>
  );

  function handleEvent(event) {
    const label = event.target.value;

    if (label == TAB_BUTTONS_LABELS.general) {
      setInfo(<GeneralSection page={props.page} />);
      setIsOpen(!isOpen);
    }

    if (label == TAB_BUTTONS_LABELS.path) {
      setInfo(<PathOptions page={props.page} />);
      setIsOpen(!isOpen);
    }

    if (label == TAB_BUTTONS_LABELS.tip) {
      setInfo(<Tips page={props.page} />);
      setIsOpen(!isOpen);
    }

    if (label == TAB_BUTTONS_LABELS.points) {
      setInfo(<Points page={props.page} />);
      setIsOpen(!isOpen);
    }

    if (label == TAB_BUTTONS_LABELS.location) {
      setInfo(<Map page={props.page} />);
      setIsOpen(!isOpen);
    }
  }

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-center">
        <ul
          className="text-ms font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400"
          id="fullWidthTab"
          data-tabs-toggle="#fullWidthTabContent"
          role="tablist"
        >
          {TAB_BUTTONS.map((button) => {
            return (
              <MenuItem
                id={button.id}
                href={button.href}
                key={button.id}
                label={button.label}
                onClick={handleEvent}
                value={button.label}
              />
            );
          })}
        </ul>
      </div>
      {info}
      {isOpen}
    </div>
  );
}
