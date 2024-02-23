import CardInfo from "@/components/common/UI/cards/card_info/CardInfo";
import Image from "next/image";
import INTRODUCTION from "@/components/lists/introduction";

export default function Introduction() {
  return (
    <div>
      <div className=" text-center m-auto ">
        <CardInfo array={INTRODUCTION} />

        <Image
          src="https://estradas-website.s3.amazonaws.com/Estradas/rui.png"
          alt="Rui Costa"
          unoptimized
          priority={true}
          width={500}
          height={160}
          className="m-auto mb-10"
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
