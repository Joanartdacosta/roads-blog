import React from "react";
import Typewriter from "typewriter-effect";

export default function Title() {
  return (
    <div className="">
      <div className="text-gray-100 font-extrabold text-4xl tracking-widest p-2">
        {/* border-current border-solid border-4"> */}
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("ESTRADA FORA ").pauseFor(2000).start();
          }}
        />
        <div className="p-5 text-dark-200 text-4xl">
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
        <div className="bold text-dark-200 text-4xl">
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
