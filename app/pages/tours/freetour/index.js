import Form from "@/components/common/UI/forms/Form";
import Banner from "@/components/dashboard/tour/banner/Banner";

export default function FreeTour() {
  return (
    <div>
      <div>
        <Banner />
      </div>
      <div className="max-w-5xl m-auto pt-20 pb-20">
        <p>
          Preencha os seus dados e de acordo com as informacoes partilhadas,
          sera enviado para o email um roteiro personalizado.
        </p>
        <p className="pb-10">
          {" "}
          O roteiro inclui percurso, dicas: alojamento, alimentacao, percurso,
          deslocamento e dicas uteis.
        </p>

        <Form />
      </div>
    </div>
  );
}
