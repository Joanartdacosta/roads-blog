import React from "react";
import Link from "next/link";
import { useState } from "react";
import NavBar from "./NavBar";

export default function NavbarMenu() {
  const [openMenu, setOpenMenu] = useState(false);

  const menu = (
    <div className="navbar">
      <NavBar />
    </div>
  );

  return (
    <div className="height-100 display-flex display-column big-menu">
      <Link onClick={() => setOpenMenu(!openMenu)} href="/">
        {" "}
        <img
          className="icon"
          src="https://estradas-website.s3.amazonaws.com/Estradas/icons/Design+sem+nome.png"
          alt="menu"
        />
      </Link>
      {openMenu && menu}
    </div>
  );
}
