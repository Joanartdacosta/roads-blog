import InfoBullets from "./general_info/InfoBullets";
import GeneralSection from "./general_info/GeneralSection";
import Map from "./location/Map";
import MenuItem from "./MenuItem";
import PathOptions from "./path/PathOptions";
import TAB_BUTTONS from "@/components/lists/TabButton";
import TAB_BUTTONS_LABELS from "@/components/enums/tab_buttons_labels";
import { useState } from "react";

export default function MenuDetailsId(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [info, setInfo] = useState(
    <GeneralSection
      duration={props.duration}
      description={props.description}
      distance={props.distance}
      difficulty={props.difficulty}
    />
  );

  function handleEvent(event) {
    const label = event.target.value;

    if (label == TAB_BUTTONS_LABELS.general) {
      setInfo(
        <GeneralSection
          label={props.label}
          duration={props.duration}
          description={props.description}
          distance={props.distance}
          difficulty={props.difficulty}
        />
      );
      setIsOpen(!isOpen);
    }

    if (label == TAB_BUTTONS_LABELS.path) {
      setInfo(
        <PathOptions
          description={props.description}
          label={props.label}
          waydescription={props.waydescription}
          access={props.access}
        />
      );
      setIsOpen(!isOpen);
    }

    if (label == TAB_BUTTONS_LABELS.tip) {
      setInfo(<InfoBullets description={props.description} />);
      setIsOpen(!isOpen);
    }

    if (label == TAB_BUTTONS_LABELS.location) {
      setInfo(<Map latitude={props.latitude} longitude={props.longitude} />);
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
      {isOpen}
    </div>
  );
}
