import GeneralBanner from "@/components/common/general_banner/GeneralBanner";
import React from "react";
import NAVBAR_LINKS from "@/components/lists/navbar_links_map";

export default function GeoSpots() {
  return (
    <div>
      <GeneralBanner
        section={NAVBAR_LINKS["geospots"]["section"]}
        imgUrl={NAVBAR_LINKS["geospots"]["imgUrl"]}
        description={NAVBAR_LINKS["geospots"]["description"]}
      />
      <div className="max-w-5xl m-auto pt-20 pb-20">
        <div className="text-center m-auto">
          <p>Para amantes da geografia.</p>
          <p>Em atualização.</p>
        </div>
      </div>
    </div>
  );
}
