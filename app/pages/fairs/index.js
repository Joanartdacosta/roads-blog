import React from "react";
import GeneralBanner from "@/components/common/general_banner/GeneralBanner";
import MenuOptions from "@/components/common/UI/menu/MenuOptions";

export default function Fairs() {
  return (
    <div>
      <GeneralBanner />
      <div className="max-w-5xl m-auto pt-20 pb-20">
        <MenuOptions />
      </div>
    </div>
  );
}
