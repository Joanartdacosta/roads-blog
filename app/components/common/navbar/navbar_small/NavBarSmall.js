import { Dropdown } from "flowbite-react";
import NavbarLink from "@/components/common/navbar/navbar_small/NavBarLink";
import NAVBAR_LINKS from "@/components/lists/navbar_links_map";
import SmallFooter from "../../footer/footer_small/SmallFooter";

export default function NavBarSmall() {
  return (
    <div className="bg-black h-20 w-full flex justify-between">
      <Dropdown
        className="h-max m-auto bg-black border border-yellow-900"
        label="MENU "
      >
        <NavbarLink array={NAVBAR_LINKS} />
        <SmallFooter />
      </Dropdown>
      <div>
        <a href="/">
          <img
            className="w-16 m-auto"
            src="https://estradas-website.s3.amazonaws.com/Estradas/icons/logos/logo-estradas4.png"
            alt="logo"
          />
        </a>
      </div>
    </div>
  );
}
