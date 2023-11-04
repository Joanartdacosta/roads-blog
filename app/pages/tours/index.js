import React from "react";

import Form from "@/components/common/UI/forms/Form";
import CardStars from "@/components/common/UI/cards/card_stars/CardStars";
import TOURS from "@/components/lists/tours";
import Banner from "@/components/common/banner/Banner";

export default function Tours() {
  return (
    <div>
      <Banner />
      <div className="max-w-5xl m-auto">
        <CardStars array={TOURS} />
        <div id="#freetours" className="p-20">
          <h1>ROTEIRO PERSONALIZADO GRATUITO</h1>
          <p>
            Preencha os seus dados e de acordo com as informacoes partilhadas,
            sera enviado para o email um roteiro personalizado. O roteiro inclui
            percurso, dicas: alojamento, alimentacao, percurso, deslocamento e
            dicas uteis.
          </p>
          <Form />
        </div>
      </div>
    </div>
  );
}
