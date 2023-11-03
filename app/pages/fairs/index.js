import React from "react";
import FAIRS from "@/components/lists/fairs";
import CardInfoButton from "@/components/common/UI/cards/card_info/CardInfoButton";

export default function Fairs() {
  return (
    <div>
      <h1>FEIRAS, ROMARIAS e FESTIVAIS </h1>
      <div>
        <CardInfoButton array={FAIRS} />
      </div>
    </div>
  );
}
