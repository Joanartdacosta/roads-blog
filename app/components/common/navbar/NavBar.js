import { Dropdown } from "flowbite-react";
import NavbarLink from "@/components/common/navbar/NavBarLink";
import MENU from "@/components/lists/menu";
import SmallFooter from "./SmallFooter";

export default function NavBar() {
  return (
    <div>
      <Dropdown
        className="height-100 margin-auto padding-40"
        label={
          <img
            className="icon"
            src="https://estradas-website.s3.amazonaws.com/Estradas/icons/Design+sem+nome+(1).png"
            alt="menu"
          />
        }
      >
        <img
          className="logo"
          src="https://estradas-website.s3.amazonaws.com/Estradas/roads-logo.png"
          alt="logo"
        />

        <NavbarLink array={MENU} />
        <SmallFooter />
      </Dropdown>
    </div>
  );
}
