import Form from "@/components/common/UI/forms/Form";
import Banner from "@/components/dashboard/tour/banner/Banner";

export default function FreeTour() {
  return (
    <div>
      <div>
        <Banner />
      </div>
      <div className="poppins max-w-5xl m-auto pt-20 pb-20">
        <p className="pt-10 pb-10">
          Para receber o seu roteiro basta fornecer as indicações necessárias,
          como: o destino desejado, o tipo de transporte, entre outros detalhes.
          Preencha os seus dados e de acordo com as informacoes partilhadas,
          será entregue uma proposta de roteiro no prazo máximo de uma semana.
        </p>

        <Form />
      </div>
    </div>
  );
}
