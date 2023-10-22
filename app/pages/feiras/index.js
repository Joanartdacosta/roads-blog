import React from "react";
import FEIRAS from "@/components/lists/feiras";
import CardInfo from "@/components/UI/cards/card_info/CardInfo";
import CardInfoButton from "@/components/UI/cards/card_info/CardInfoButton";
import { Card } from "flowbite-react";

export default function Feiras() {
  return (
    <>
      <div>
        <h1>FEIRAS, ROMARIAS e FESTIVAIS </h1>
        <div className="display-column display-flex justify-center wrap-section">
          <CardInfoButton array={FEIRAS} />
        </div>
      </div>
    </>
  );
}
