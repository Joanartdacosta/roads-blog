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
import NAVBAR_LINKS from "@/components/lists/navbar_links";
import Link from "next/link";
import Image from "next/image";

export default function NavBarBig() {
  const [state, setState] = React.useState({
    top: false,
    bottom: false,
    menu: true,
  });

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
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="overflow-hidden pl-0 w-full p-5 h-full bg-black"
    >
      <List className=" text-white overflow-hidden">
        {NAVBAR_LINKS.map((item) => (
          <ListItem key={item.section} disablePadding>
            <ListItemButton>
              <ListItemIcon></ListItemIcon>
              <Link href={item.href} className="hover:text-yellow-400">
                <ListItemText primary={item.section} />
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
      <img
        src="https://www.tailorbrands.com/wp-content/uploads/2021/05/forbes-300x300.png"
        alt="logotipo"
        width={"100"}
        height={"100"}
        className="m-2 float-right"
      />
      {["menu", "top", "bottom"].map((anchor) => (
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
      ))}
    </div>
  );
}
