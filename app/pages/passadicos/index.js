import PASSEIOS from "@/components/lists/passeios";
import CardStars from "@/components/UI/cards/card_stars/CardStars";
import Form from "@/components/UI/forms/Form";
import React from "react";

export default function Passadicos() {
  return (
    <>
      <div id="#passadicos">
        <h1 className="text-center font-title">PASSEIOS E PASSADICOS</h1>

        <CardStars array={PASSEIOS} />
        <Form />
      </div>
    </>
  );
}
