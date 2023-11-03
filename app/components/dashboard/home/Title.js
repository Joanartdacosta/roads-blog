import React from "react";
import Typewriter from "typewriter-effect";

export default function Title() {
  return (
    <div className="margin-auto text-center">
      <div className="padding-10 font-title font-bold">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("ESTRADA FORA, ").pauseFor(2000).start();
          }}
        />
        <div className="padding-10 font-title font-bold">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .pauseFor(1500)
                .typeString("PAISAGENS ADENTRO, ")
                .pauseFor(700)
                .start();
            }}
          />
        </div>
        <div className="padding-10 font-title font-bold">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .pauseFor(3000)
                .typeString("        ...")
                .typeString("E OUTROS LUGARES QUE TAIS")
                .start();
              Title();
            }}
          />
        </div>
      </div>
    </div>
  );
}
