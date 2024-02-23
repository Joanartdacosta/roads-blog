import ButtonYellow from "../UI/button/ButtonYellow";
import ButtonYellow2 from "../UI/button/ButtonYellow2";

export default function FreeTourBanner() {
  return (
    <div className="bg-neutral-300 h-full opacity-80">
      <div className="text-center relative m-auto sm:static sm:px-6 lg:px-8">
        <p className="tracking-tight text-amber-600 pt-16 pb-6 text-dark-600 sm:text-3xl responsive-title">
          Peca o seu roteiro gratuito
        </p>
        <p className="poppins text-sm text-gray-800 w-3/6 m-auto responsive-text">
          Está a planear uma viagem pelo país e gostaria de ter um roteiro que o
          ajude a aproveitar ao máximo essa experiência? Não dispõe de tempo ou
          paciência para o elaborar? Partilhe as suas preferências atraves do
          formulário e sera enviado um roteiro personalizado!
        </p>
      </div>
      <div className="w-4/12 m-auto mb-8 mt-8 pb-16 responsive-button">
        <ButtonYellow2
          label={"Pedido de Roteiro gratuito e personalizado"}
          href={"/tours/freetour"}
        />
      </div>
    </div>
  );
}
