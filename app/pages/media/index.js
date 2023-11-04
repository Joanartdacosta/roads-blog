import GeneralBanner from "@/components/common/general_banner/GeneralBanner";
import React from "react";

export default function Media() {
  return (
    <div>
      <GeneralBanner />
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
