import Form from "@/components/common/UI/forms/Form";
import Banner from "@/components/dashboard/tour/banner/Banner";

export default function FreeTour() {
  return (
    <div>
      <div>
        <Banner />
      </div>
      <div className="poppins max-w-5xl m-auto pt-20 pb-20">
        <p>
          Preencha os seus dados e de acordo com as informacoes partilhadas,
          sera enviado para o email um roteiro personalizado.
        </p>

        <Form />
      </div>
    </div>
  );
}
