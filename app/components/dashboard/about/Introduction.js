import Image from "next/image";

export default function Introduction() {
  return (
    <div>
      <div className=" text-center m-auto">
        <p>
          Chamo-me Rui Costa e fui professor de Geografia ao longo de 42 anos.
        </p>
        <p>
          A experiência como professor fez crescer o meu gosto por viajar e
          levou-me a organizar muitos passeios, como professor e tambem para a
          família.{" "}
        </p>
        <p>
          {" "}
          Agora que me encontro, numa nova etapa da minha vida (aposentado),
          achei que podia ajudar, quem gosta de viajar, testemunhando as minhas
          experiências, partilhando roteiros das viagens e divulgando aspetos de
          interesse geográfico.
        </p>

        <Image
          src="https://estradas-website.s3.amazonaws.com/Estradas/rui.png"
          alt="Rui Costa"
          unoptimized
          priority={true}
          width={1100}
          height={1100}
          className="m-auto mb-10 mt-10"
        />
      </div>
      <div className="text-center m-auto border border-double border-amber-800 p-6 border-8 rounded">
        <p className="font-bold italic text-s play">
          A vida é o que fazemos dela. As viagens são os viajantes. O que vemos
          não é o que vemos, senão o que somos.
        </p>
        <p className="font-bold text-xs text-amber-800 mt-4 play">
          Fernando Pessoa
        </p>
      </div>
    </div>
  );
}
