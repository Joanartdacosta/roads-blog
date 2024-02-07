import ButtonBlack from "@/components/common/UI/button/ButtonBlack";
import ButtonLight from "@/components/common/UI/button/ButtonLight";
import React from "react";

export default function Title() {
  return (
    <div className="text-gray-200">
      <div className="p-10">
        <p className="pb-4 text-6xl oswald">ESTRADA FORA, </p>
        <p className="pb-4 text-4xl oswald">PAISAGENS ADENTRO...</p>
        <p className="pb-12 text-5xl oswald">E OUTROS LUGARES QUE TAIS!</p>
        <ButtonBlack
          label={"OBTENHA UM ROTEIRO GRATUITO"}
          href={"/tours/freetour"}
        />
      </div>
    </div>
  );
}
