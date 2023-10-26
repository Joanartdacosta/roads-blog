import React from "react";

import Form from "@/components/UI/forms/Form";
import CardStars from "@/components/UI/cards/card_stars/CardStars";
import TOURS from "@/components/lists/tours";

export default function Tours() {
  return (
    <div>
      <h1>ROTEIROS </h1>
      <div>
        <CardStars array={TOURS} />
        <div id="#freetours">
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
