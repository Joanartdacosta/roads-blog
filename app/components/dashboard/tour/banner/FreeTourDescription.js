import ButtonYellow from "@/components/common/UI/button/ButtonYellow";
import BUTTONS_LABELS from "@/components/enums/buttons_labels";
import Link from "next/link";

export default function BannerDescription() {
  return (
    <div>
      <div className="overflow-hidden">
        <div className="pb-80 pt-16 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-xl tracking-tight text-dark-600 sm:text-6xl">
                Roteiro Gratuito
              </h1>
              <p className="poppins mt-4 text-base text-gray-500 pb-8 ">
                Está a planear uma viagem pelo país e gostaria de ter um roteiro
                que o ajude a aproveitar ao máximo essa experiência? Não dispõe
                de tempo ou paciência para o elaborar? Estou aqui para o ajudar
                e o melhor é que é totalmente gratuito! Não perca mais tempo,
                partilhe connosco as suas preferências atraves do formulário e
                prepare-se para uma experiência única!
              </p>
            </div>
            <Link href="#freetour">
              <ButtonYellow label={BUTTONS_LABELS.askFreeTour} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
