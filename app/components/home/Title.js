import React from "react";
import Typewriter from "typewriter-effect";

export default function Title() {
  return (
    <div>
      <div className="padding-50 title-roads1 margin-auto text-center oads-shadow2 font-bold">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("ESTRADA FORA, ").pauseFor(2000).start();
          }}
        />
        <div className="padding-50 title-roads2 margin-auto text-center roads-shadow2 font-bold">
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
        <div className="padding-50 title-roads3 text-center margin-auto font-bold roads-shadow2">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .pauseFor(3000)
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
