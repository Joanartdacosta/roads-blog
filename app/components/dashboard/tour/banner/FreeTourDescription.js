import YellowButton from "@/components/common/UI/button/YellowButton";
import Link from "next/link";

export default function BannerDescription() {
  return (
    <div>
      <div className="overflow-hidden">
        <div className="pb-80 pt-16 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl tracking-tight text-dark-600 sm:text-6xl">
                Roteiro Personalizado Gratuito
              </h1>
              <p className="mt-4 text-base text-gray-500 pb-8">
                Pretende viajar e necessita de sugestoes de alojamento, locais
                restauracao, melhor percurso, pontos de interesse? Preencha o
                formulario e envio um roteiro para a regiao que pretende, de
                forma gratuita. Inclui indicacoes de percurso, sugestoes de
                restaurantes, alojamentos e dicas para aproveitar o que de
                melhor tem o local.
              </p>
            </div>
            <Link href="#freetour">
              <YellowButton label={"Pedido de Roteiro Gratuito"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
