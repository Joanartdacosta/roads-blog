import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";

import SmallFooter from "../SmallFooter";
import NAVBAR_LINKS from "@/components/lists/navbar_links_map";
import Link from "next/link";

export default function MenuNavBar() {
  const [state, setState] = React.useState({
    menu: true,
  });

  const anchor = "menu";

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="overflow-hidden pl-0 w-full h-full bg-black"
    >
      <List className="text-gray-100 overflow-hidden">
        <img
          className="w-24 m-auto mt-4 mb-4"
          src="https://estradas-website.s3.amazonaws.com/Estradas/icons/logos/logo-estradas4.png"
          alt="logo"
        />
        {NAVBAR_LINKS["order"].map((item) => (
          <div
            key={NAVBAR_LINKS[item].section}
            className="pl-28 pr-28 pt-2 pb-2 font-thin poppins"
          >
            <Link
              href={NAVBAR_LINKS[item].href}
              className="hover:text-amber-500 text-base poppins"
            >
              {NAVBAR_LINKS[item].section}
            </Link>
          </div>
        ))}
      </List>

      <div className="bg-black pt-0">
        <SmallFooter />
      </div>
    </Box>
  );

  return (
    <div className="bg-black">
      <Link href="/">
        <img
          src="https://estradas-website.s3.amazonaws.com/Estradas/icons/logos/logo-estradas4.png"
          alt="logotipo"
          width={"100"}
          height={"100"}
          className="m-2 float-right"
        />
      </Link>

      <React.Fragment key={anchor}>
        <Button
          className="overflow-hidden text-gray-200 text-2xl h-28 pl-20 font-thin poppins"
          onClick={toggleDrawer(anchor, true)}
        >
          {anchor}
        </Button>
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
