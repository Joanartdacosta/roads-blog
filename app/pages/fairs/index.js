import React from "react";
import FAIRS from "@/components/lists/fairs";
import CardInfoButton from "@/components/UI/cards/card_info/CardInfoButton";

export default function Fairs() {
  return (
    <div>
      <h1>FEIRAS, ROMARIAS e FESTIVAIS </h1>
      <div className="display-column display-flex justify-center wrap-section">
        <CardInfoButton array={FAIRS} />
      </div>
    </div>
  );
}
