import React from "react";
import GeneralBanner from "@/components/common/general_banner/GeneralBanner";
import MenuOptions from "@/components/dashboard/fairs/MenuOptions";
import NAVBAR_LINKS from "@/components/lists/navbar_links_map";

export default function Fairs() {
  return (
    <div>
      <GeneralBanner
        section={NAVBAR_LINKS["fairs"]["section"]}
        imgUrl={NAVBAR_LINKS["fairs"]["imgUrl"]}
        description={NAVBAR_LINKS["fairs"]["description"]}
      />
      <div className="max-w-5xl m-auto pt-20 pb-20">
        <MenuOptions />
      </div>
    </div>
  );
}
