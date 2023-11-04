import { Dropdown } from "flowbite-react";
import NavbarLink from "@/components/common/navbar/NavBarLink";
import NAVBAR_LINKS from "@/components/lists/navbar_links";
import SmallFooter from "./SmallFooter";

export default function NavBar() {
  return (
    <div className="bg-black h-20 p-5 w-full fixed">
      <Dropdown
        className="h-max m-auto bg-black border-transparent pl-0"
        label="MENU"
      >
        <NavbarLink array={NAVBAR_LINKS} />
        <SmallFooter />
      </Dropdown>
    </div>
  );
}
