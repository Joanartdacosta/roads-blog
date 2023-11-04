import React from "react";
import Typewriter from "typewriter-effect";

export default function Title() {
  return (
    <div className="m-auto text-center pt-20">
      <div className="p-10 text-4xl">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("ESTRADA FORA ").pauseFor(2000).start();
          }}
        />
        <div className="p-5">
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
        <div className="p-5">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .pauseFor(3000)
                .typeString("        ...")
                .typeString("E outros Lugares que tais")
                .start();
              Title();
            }}
          />
        </div>
      </div>
    </div>
  );
}
