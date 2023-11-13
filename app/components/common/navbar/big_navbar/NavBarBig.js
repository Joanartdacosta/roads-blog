import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SmallFooter from "../SmallFooter";
import NAVBAR_LINKS from "@/components/lists/navbar_links_map";
import Link from "next/link";
import Image from "next/image";

export default function NavBarBig() {
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
      className="overflow-hidden pl-0 w-full p-5 h-full bg-black"
    >
      <List className="text-gray-200 text-3xl poppins font-thin overflow-hidden tracking-widest poppins">
        <img
          className="w-24 m-auto mt-4 mb-4"
          src="https://estradas-website.s3.amazonaws.com/Estradas/icons/logos/logo-estradas4.png"
          alt="logo"
        />
        {NAVBAR_LINKS["order"].map((item) => (
          <ListItem key={NAVBAR_LINKS[item].section} disablePadding>
            <ListItemButton>
              <ListItemIcon></ListItemIcon>
              <Link
                href={NAVBAR_LINKS[item].href}
                className="hover:text-amber-800"
              >
                <ListItemText primary={NAVBAR_LINKS[item].section} />
              </Link>
            </ListItemButton>
          </ListItem>
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
          className="overflow-hidden text-gray-300 text-lg h-28 pl-20"
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
