import FAIRS from "@/components/lists/fairs";
import { useState } from "react";

export default function MenuOptions(props) {
  const [regions, setRegions] = useState(FAIRS);

  function filterRegionNord() {
    setRegions(
      FAIRS.filter((item) => {
        return item.location === "Norte";
      })
    );
  }

  // const FILTERED_REGION = [];

  // function filterCategory() {
  //   const filtered = FAIRS.filter((category) => {
  //     if (category.region.includes("Norte")) {
  //       return FILTERED_REGION.push();
  //     }
  //     if (category.region.includes("Centro")) {
  //       return FILTERED_REGION.push();
  //     }
  //     if (category.region.includes("Sul")) {
  //       return FILTERED_REGION.push();
  //     }

  //     return props.filtered;
  //   });
  // }
  return (
    <div>
      <div class="inline-flex rounded-md shadow-sm" role="group">
        <button
          key={props.id}
          onClick={filterRegionNord}
          type="button"
          class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-yellow-700 focus:z-10 focus:ring-2 focus:ring-yellow-700 focus:text-yellow-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-yellow-500 dark:focus:text-white"
        >
          Norte
        </button>
        <button
          // onClick={filterRegion("Center")}
          type="button"
          class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-yellow-700 focus:z-10 focus:ring-2 focus:ring-yellow-700 focus:text-yellow-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-yellow-500 dark:focus:text-white"
        >
          Centro
        </button>
        <button
          // onClick={filterRegion("Sul")}
          type="button"
          class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-yellow-700 focus:z-10 focus:ring-2 focus:ring-yellow-700 focus:text-yellow-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-yellow-500 dark:focus:text-white"
        >
          Sul
        </button>
        <button
          // onClick={filterRegion("Ilhas")}
          type="button"
          class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-yellow-700 focus:z-10 focus:ring-2 focus:ring-yellow-700 focus:text-yellow-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-yellow-500 dark:focus:text-white"
        >
          Ilhas
        </button>
        <button
          // onClick={filterRegion(FAIRS)}
          type="button"
          class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-yellow-700 focus:z-10 focus:ring-2 focus:ring-yellow-700 focus:text-yellow-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-yellow-500 dark:focus:text-white"
        >
          Todos
        </button>
      </div>
    </div>
  );
}
