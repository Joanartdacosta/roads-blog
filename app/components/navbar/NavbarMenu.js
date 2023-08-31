import React from "react";
import Link from "next/link";
import { useState } from "react";
import NavBar from "./NavBar";
import navBarStyles from "./navbar.module.css";

export default function NavbarMenu() {
  const [openMenu, setOpenMenu] = useState(false);

  const menu = (
    <div>
      <NavBar />
    </div>
  );

  return (
    <div className={navBarStyles.menuTotal}>
      <Link onClick={() => setOpenMenu(!openMenu)} href="/">
        {" "}
        <img
          className={navBarStyles.menuIcon}
          src="https://estradas-website.s3.amazonaws.com/Estradas/icons/Design+sem+nome.png"
          alt="menu"
        />
      </Link>
      {openMenu && menu}
    </div>
  );
}
