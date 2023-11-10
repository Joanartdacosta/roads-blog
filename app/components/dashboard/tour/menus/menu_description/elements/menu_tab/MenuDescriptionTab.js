import MenuDescriptionItem from "./MenuDescriptionItem";
import TAB_BUTTONS from "../../lists/TabButton";

export default function MenuDescriptionTab() {
  return (
    <div className="flex justify-center">
      <ul
        class="text-ms font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400"
        id="fullWidthTab"
        data-tabs-toggle="#fullWidthTabContent"
        role="tablist"
      >
        {TAB_BUTTONS.map((button) => {
          return (
            <MenuDescriptionItem
              href={button.href}
              id={button.id}
              label={button.label}
            />
          );
        })}
      </ul>
    </div>
  );
}
