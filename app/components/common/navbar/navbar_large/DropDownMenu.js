import NAVBAR_LINKS from "@/components/lists/navbar_links_map";

export default function DropDownMenu() {
  return (
    <div
      id="mega-menu-full-dropdown"
      className="border-yellow-800 shadow-sm bg-gray-100 border-y dark:bg-gray-800 dark:border-gray-600"
    >
      <div className="flex flex-wrap justify-center align-items-center max-w-screen-xl mx-auto text-yellow-900 dark:text-white gap-2 p-2">
        {NAVBAR_LINKS["order"].map((item) => {
          return (
            <div
              key={NAVBAR_LINKS[item].id}
              className="w-60 hover:bg-gray-200 dark:hover:bg-gray-700 p-3 border border-gray-100 rounded-lg shadow-md cursor-pointer"
            >
              <a href={NAVBAR_LINKS[item].href} className="rounded-lg ">
                <img
                  className="object-cover w-96 h-28"
                  src={NAVBAR_LINKS[item].imgUrl}
                  alt={NAVBAR_LINKS[item].section}
                />
                <div className="font-semibold">
                  {NAVBAR_LINKS[item].section}
                </div>
                <span className="text-xs text-gray-700 dark:text-gray-400">
                  {NAVBAR_LINKS[item].description}
                </span>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
