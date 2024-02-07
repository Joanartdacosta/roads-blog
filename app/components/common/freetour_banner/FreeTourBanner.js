import ButtonYellow from "../UI/button/ButtonYellow";
import ButtonYellow2 from "../UI/button/ButtonYellow2";

export default function FreeTourBanner() {
  return (
    <div className="bg-neutral-300 h-80 opacity-80 ">
      <div className=" w-screen text-center">
        <p className="poppins text-4xl tracking-tight text-amber-600 pt-16 pb-6">
          Peca o seu roteiro gratuito
        </p>
        <p className="poppins text-sm text-gray-800 w-3/6 m-auto">
          Está a planear uma viagem pelo país e gostaria de ter um roteiro que o
          ajude a aproveitar ao máximo essa experiência? Não dispõe de tempo ou
          paciência para o elaborar? Partilhe as suas preferências atraves do
          formulário e sera enviado um roteiro personalizado!
        </p>
      </div>
      <div className="w-4/12 m-auto p-4 w-3/6">
        <ButtonYellow2
          label={"Pedido de Roteiro gratuito e personalizado"}
          href={"/tours/freetour"}
        />
      </div>
    </div>
  );
}
