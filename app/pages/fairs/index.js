import React from "react";
import FAIRS from "@/components/lists/fairs";
import CardInfoButton from "@/components/common/UI/cards/card_info/CardInfoButton";
import Banner from "@/components/common/banner/Banner";
import MenuOptions from "@/components/common/UI/menu/MenuOptions";

export default function Fairs() {
  return (
    <div>
      <Banner />
      <div className="max-w-5xl m-auto pt-20 pb-20">
        <div className="text-center pb-10">
          <MenuOptions />
        </div>

        <div>
          <CardInfoButton array={FAIRS} />
        </div>
      </div>
    </div>
  );
}
