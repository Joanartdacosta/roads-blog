import React from "react";
import Typewriter from "typewriter-effect";

export default function Title() {
  return (
    <div>
      <div className="text-gray-100 font-extrabold text-6xl tracking-widest p-2 oswald">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("ESTRADA FORA ").pauseFor(2000).start();
          }}
        />
        <div className="p-5 text-dark-200 text-5xl oswald">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .pauseFor(1500)
                .typeString("     PAISAGENS ADENTRO... ")
                .pauseFor(700)
                .start();
            }}
          />
        </div>
        <div className="bold text-dark-200 text-5xl">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .pauseFor(3000)
                .typeString("        ...")
                .typeString("E OUTROS LUGARES QUE TAIS!")
                .start();
              Title();
            }}
          />
        </div>
      </div>
    </div>
  );
}
