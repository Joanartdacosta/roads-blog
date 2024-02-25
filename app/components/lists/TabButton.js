import TAB_BUTTONS_LABELS from "../enums/tab_buttons_labels";
import { Info } from "lucide-react";
import { Lightbulb } from "lucide-react";
import { Map } from "lucide-react";
import { MapPin } from "lucide-react";
import { Telescope } from "lucide-react";

const TAB_BUTTONS = [
  {
    id: "general-tab",
    href: "#general",
    label: TAB_BUTTONS_LABELS.general,
    icon: <Info />,
  },

  {
    id: "location-tab",
    href: "#local",
    label: TAB_BUTTONS_LABELS.location,
    icon: <MapPin />,
  },

  {
    id: "points-tab",
    href: "#interest",
    label: TAB_BUTTONS_LABELS.points,
    icon: <Telescope />,
  },
  {
    id: "path-tab",
    href: "#path",
    label: TAB_BUTTONS_LABELS.path,
    icon: <Map />,
  },
  {
    id: "recomendation-tab",
    href: "#recomend",
    label: TAB_BUTTONS_LABELS.tip,
    icon: <Lightbulb />,
  },
];

export default TAB_BUTTONS;
