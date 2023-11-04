import React from "react";
import FAIRS from "@/components/lists/fairs";
import CardInfoButton from "@/components/common/UI/cards/card_info/CardInfoButton";
import Banner from "@/components/common/banner/Banner";

export default function Fairs() {
  return (
    <div>
      <Banner />
      <div className="max-w-5xl m-auto pt-20 pb-20">
        <CardInfoButton array={FAIRS} />
      </div>
    </div>
  );
}
