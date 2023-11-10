import GeneralBanner from "@/components/common/general_banner/GeneralBanner";
import React from "react";
import NAVBAR_LINKS from "@/components/lists/navbar_links_map";

export default function Media() {
  return (
    <div>
      <GeneralBanner
        section={NAVBAR_LINKS["media"]["section"]}
        imgUrl={NAVBAR_LINKS["media"]["imgUrl"]}
        description={NAVBAR_LINKS["media"]["description"]}
      />
      <div className="max-w-5xl m-auto pt-20 pb-20">
        <div className="text-center m-auto">
          {" "}
          <p>Videos, artigos e noticias.</p>
          <p>Em atualizacao.</p>
        </div>
      </div>
    </div>
  );
}
