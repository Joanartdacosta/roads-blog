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
        bullet1={props.bullet1}
        bullet2={props.bullet2}
        bullet3={props.bullet3}
        bullet4={props.bullet4}
        description1={props.description1}
        difficulty={props.difficulty}
        distance={props.distance}
        duration={props.duration}
      />
    </div>
  );

  function handleEvent(event) {
    const label = event.target.value;

    if (label == TAB_BUTTONS_LABELS.general) {
      setInfo(
        <GeneralSection
          bullet1={props.bullet1}
          bullet2={props.bullet2}
          bullet3={props.bullet3}
          bullet4={props.bullet4}
          description1={props.description1}
          difficulty={props.difficulty}
          distance={props.distance}
          duration={props.duration}
          label={props.label}
        />
      );
      setIsOpen(!isOpen);
    }

    if (label == TAB_BUTTONS_LABELS.path) {
      setInfo(
        <PathOptions
          accessOption1={props.accessOption1}
          accessOption2={props.accessOption2}
          accessOption3={props.accessOption3}
          description1={props.description1}
          hotel1={props.hotel1}
          hotel2={props.hotel2}
          hotel3={props.hotel3}
          labelOption1={props.labelOption1}
          labelOption2={props.labelOption2}
          labelOption1Description={props.labelOption1Description}
          labelOption2Description={props.labelOption2Description}
          restaurant1={props.restaurant1}
          restaurant2={props.restaurant2}
        />
      );
      setIsOpen(!isOpen);
    }

    if (label == TAB_BUTTONS_LABELS.tip) {
      setInfo(
        <Tips
          bullet1={props.bullet1}
          bullet2={props.bullet2}
          bullet3={props.bullet3}
          bullet4={props.bullet4}
          description1={props.description1}
          hotel1={props.hotel1}
          hotel2={props.hotel2}
          hotel3={props.hotel3}
          restaurant1={props.restaurant1}
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
