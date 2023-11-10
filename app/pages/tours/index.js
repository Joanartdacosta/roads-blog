import React from "react";
import CardStars from "@/components/common/UI/cards/card_stars/CardStars";
import TOURS from "@/components/lists/tours";
import GeneralBanner from "@/components/common/general_banner/GeneralBanner";
import MenuDescription from "@/components/dashboard/tour/menus/menu_description/MenuDescription";

export default function Tours() {
  return (
    <div>
      <GeneralBanner />
      <div className="max-w-5xl m-auto pt-20 pb-20 w-max">
        <CardStars array={TOURS} />
        <MenuDescription />
      </div>
    </div>
  );
}
