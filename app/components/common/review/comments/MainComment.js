import Avatar from "../User/Avatar";
import ButtonReply from "../buttons/ButtonReply";
import Dots from "../../icons/dots/Dots";
import MenuDot from "../MenuDots";
import TextArea from "./TextComment";

export default function MainComment() {
  return (
    <div>
      <footer class="flex justify-between items-center mb-2">
        <Avatar />

        <button
          id="dropdownComment4Button"
          data-dropdown-toggle="dropdownComment4"
          class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-40 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          type="button"
        >
          <Dots />
        </button>

        <MenuDot />
      </footer>
      <TextArea />
      <div class="flex items-center mt-4 space-x-4">
        <ButtonReply />
      </div>
    </div>
  );
}
