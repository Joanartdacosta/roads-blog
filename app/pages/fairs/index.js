import React from "react";
import GeneralBanner from "@/components/common/general_banner/GeneralBanner";
import NAVBAR_LINKS from "@/components/lists/navbar_links_map";
import FilteringFair from "@/components/dashboard/fairs/filter_fair/FilteringFair";

export default function Fairs() {
  return (
    <div>
      <GeneralBanner
        section={NAVBAR_LINKS["fairs"]["section"]}
        imgUrl={NAVBAR_LINKS["fairs"]["imgUrl"]}
        description={NAVBAR_LINKS["fairs"]["description"]}
      />
      <div className="roboto max-w-5xl m-auto pt-20 pb-20 pr-6 pl-6">
        <FilteringFair />
      </div>
    </div>
  );
}
