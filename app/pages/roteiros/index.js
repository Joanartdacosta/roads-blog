import React from "react";

import ROTEIROS from "@/components/lists/roteiros";
import Form from "@/components/UI/forms/Form";
import CardStars from "@/components/UI/cards/card_stars/CardStars";

export default function feiras() {
  return (
    <>
      <div>
        <h1>ROTEIROS </h1>
        <div className="display-column display-flex justify-center wrap-section">
          <CardStars array={ROTEIROS} />
          <div id="#roteirogratuito">
            <h1>ROTEIRO PERSONALIZADO GRATUITO</h1>
            <p>
              Preencha os seus dados e de acordo com as informacoes partilhadas,
              sera enviado para o email um roteiro personalizado. O roteiro
              inclui percurso, dicas: alojamento, alimentacao, percurso,
              deslocamento e dicas uteis.
            </p>
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}
