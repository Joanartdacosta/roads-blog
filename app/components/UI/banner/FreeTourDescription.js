import Button from "@/components/UI/banner/Button";

export default function BannerDescription() {
  return (
    <div>
      <div className="relative overflow-hidden bg-white">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Roteiro Personalizado Gratuito
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                Pretende viajar e necessita de sugestoes de alojamento, locais
                restauracao, melhor percurso, pontos de interesse? Preencha o
                formulario e envio um roteiro para a regiao que pretende, de
                forma gratuita. Inclui indicacoes de percurso, sugestoes de
                restaurantes, alojamentos e dicas para aproveitar o que de
                melhor tem o local.
              </p>
            </div>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}
