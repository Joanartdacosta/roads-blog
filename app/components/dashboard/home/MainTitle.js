import ButtonBlack from "@/components/common/UI/button/ButtonBlack";
import React from "react";

export default function Title() {
  return (
    <div className="text-gray-200 margin-left">
      <div className="">
        <p className="pb-4 text-6xl oswald responsive-estradas">
          ESTRADA FORA,
        </p>
        <p className="pb-4 text-4xl oswald responsive-estradas">
          PAISAGENS ADENTRO...
        </p>
        <p className="pb-12 text-5xl oswald responsive-estradas left-margin">
          E OUTROS LUGARES QUE TAIS!
        </p>
        <ButtonBlack
          label={"OBTENHA UM ROTEIRO GRATUITO"}
          href={"/tours/freetour"}
        />
      </div>
    </div>
  );
}
