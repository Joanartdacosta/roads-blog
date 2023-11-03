import { Dropdown } from "flowbite-react";
import NavbarLink from "@/components/common/navbar/NavBarLink";
import NAVBAR_LINKS from "@/components/lists/navbar_links";
import SmallFooter from "./SmallFooter";

export default function NavBar() {
  return (
    <div className="bg-black h-20 p-5">
      <Dropdown
        className="h-full m-auto p-10 bg-black border-transparent  "
        label="MENU"
      >
        <NavbarLink array={NAVBAR_LINKS} />
        <SmallFooter />
      </Dropdown>
    </div>
  );
}
