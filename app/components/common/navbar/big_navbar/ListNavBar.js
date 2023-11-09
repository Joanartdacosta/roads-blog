import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SmallFooter from "../SmallFooter";
import NAVBAR_LINKS from "@/components/lists/navbar_links";
import Link from "next/link";
import Box from "@mui/material/Box";

export default function ListNavBar(anchor) {
  return (
    <div>
      <Box
        sx={{ anchor: "Tab" }}
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
    </div>
  );
}
