import React from "react";
import Typewriter from "typewriter-effect";
import homeStyles from "./home.module.css";

export default function Title() {
  return (
    <div className={homeStyles.blogTitle}>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("ESTRADA FORA, ")
            .pauseFor(700)
            .typeString("PAISAGENS ADENTRO, ")
            .pauseFor(700)
            .typeString("E OUTROS LUGARES QUE TAIS")
            .deleteAll()
            .start();
          Title();
        }}
      />
    </div>
  );
}
