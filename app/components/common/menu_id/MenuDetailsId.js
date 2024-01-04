import InfoBullets from "./general_info/InfoBullets";
import GeneralSection from "./general_info/GeneralSection";
import Map from "./location/Map";
import MenuItem from "./MenuItem";
import PathOptions from "./path/PathOptions";
import TAB_BUTTONS from "@/components/lists/TabButton";
import TAB_BUTTONS_LABELS from "@/components/enums/tab_buttons_labels";
import { useState } from "react";
import Tips from "./general_info/Tips";

export default function MenuDetailsId(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [info, setInfo] = useState(
    <div>
      {" "}
      <GeneralSection
        duration={props.duration}
        description={props.description}
        distance={props.distance}
        difficulty={props.difficulty}
        bullet1={props.bullet1}
        bullet2={props.bullet2}
        bullet3={props.bullet3}
      />
    </div>
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
          bullet1={props.bullet1}
          bullet2={props.bullet2}
          bullet3={props.bullet3}
        />
      );
      setIsOpen(!isOpen);
    }

    if (label == TAB_BUTTONS_LABELS.path) {
      setInfo(
        <PathOptions
          description1={props.description1}
          label={props.label}
          waydescription={props.waydescription}
          access={props.access}
          restaurant1={props.restaurant1}
          restaurant2={props.restaurant2}
          hotel1={props.hotel1}
          hotel2={props.hotel2}
          hotel3={props.hotel3}
          wayoption1={props.wayoption1}
          wayoption2={props.wayoption2}
          wayoption3={props.wayoption3}
        />
      );
      setIsOpen(!isOpen);
    }

    if (label == TAB_BUTTONS_LABELS.tip) {
      setInfo(
        <Tips
          waydescription={props.waydescription}
          description1={props.description1}
          restaurant1={props.restaurant1}
          hotel1={props.hotel1}
          hotel2={props.hotel2}
          hotel3={props.hotel3}
        />
      );
      setIsOpen(!isOpen);
    }

    if (label == TAB_BUTTONS_LABELS.location) {
      setInfo(<Map latitude={props.latitude} longitude={props.longitude} />);
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
                href={button.href}
                id={button.id}
                label={button.label}
                key={button.id}
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
