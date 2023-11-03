import TRIPS from "@/components/lists/trips";
import CardStars from "@/components/common/UI/cards/card_stars/CardStars";
import Form from "@/components/common/UI/forms/Form";
import React from "react";

export default function Trips() {
  return (
    <div>
      <h1 className="text-center font-title">PASSEIOS E PASSADICOS</h1>

      <CardStars array={TRIPS} />
      <Form />
    </div>
  );
}
