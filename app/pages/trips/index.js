import TRIPS from "@/components/lists/trips";
import CardStars from "@/components/common/UI/cards/card_stars/CardStars";
import Form from "@/components/common/UI/forms/Form";
import React from "react";
import Banner from "@/components/common/banner/Banner";

export default function Trips() {
  return (
    <div>
      <Banner />
      <div className="max-w-5xl m-auto">
        <CardStars array={TRIPS} />
        <Form />
      </div>
    </div>
  );
}
