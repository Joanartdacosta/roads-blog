import { Dropdown } from "flowbite-react";
import Image from "next/image";
import FooterMobile from "@/components/common/footer/footer_mobile/FooterMobile";
import NavbarLink from "@/components/common/navbar/navbar_small/NavBarLink";

export default function NavBarMobile() {
  return (
    <div className="bg-black h-20 w-full flex justify-between">
      <Dropdown
        className="h-max m-auto bg-black border border-yellow-900"
        label="MENU "
      >
        <NavbarLink />
        <FooterMobile />
      </Dropdown>
      <div>
        <a href="/">
          <Image
            alt="estradas fora blog"
            className="w-16 m-auto"
            src="https://estradas-website.s3.amazonaws.com/Estradas/icons/logos/logo-estradas4.png"
            height={240}
            width={240}
            unoptimized
          />
        </a>
      </div>
    </div>
  );
}
