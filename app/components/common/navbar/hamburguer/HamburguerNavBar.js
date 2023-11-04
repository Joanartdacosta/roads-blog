import { Dropdown } from "flowbite-react";
import NavbarLink from "@/components/common/navbar/hamburguer/NavBarLink";
import NAVBAR_LINKS from "@/components/lists/navbar_links";
import SmallFooter from "../SmallFooter";

export default function HamburgerNavBar() {
  return (
    <div className="bg-black h-20 p-5 w-full fixed">
      <Dropdown
        className="h-max m-auto bg-black border-neutral-900 hover:border-neutral-900 focus:border-neutral-900"
        label="MENU"
      >
        <NavbarLink array={NAVBAR_LINKS} />
        <SmallFooter />
      </Dropdown>
    </div>
  );
}
