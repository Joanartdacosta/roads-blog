import DropDownArrow from "../../icons/DropDownArrow";
import { useState } from "react";
import DropDownMenu from "./DropDownMenu";

export default function NavBarLarge() {
  const [isOpen, setIsOpen] = useState(false);

  function setVisible() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <nav className="bg-black  dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <a href="/">
              <img
                className="w-24 m-auto"
                src="https://estradas-website.s3.amazonaws.com/Estradas/icons/logos/logo-estradas4.png"
                alt="logo"
              />
            </a>
          </div>

          <div
            id="mega-menu-full"
            className="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <button
                  id="mega-menu-full-dropdown-button"
                  data-collapse-toggle="mega-menu-full-dropdown"
                  className="flex items-center justify-between w-full py-2 px-3 text-gray-100 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-gray-700 dark:hover:text-yellow-500 md:dark:hover:bg-transparent dark:border-gray-700"
                  onClick={setVisible}
                >
                  <p className="text-gray-300 hover:text-yellow-300 font-thin text-lg">
                    MENU
                  </p>{" "}
                  <DropDownArrow />
                </button>
              </li>
            </ul>
          </div>
        </div>
        {isOpen && <DropDownMenu />}
      </nav>
    </div>
  );
}
