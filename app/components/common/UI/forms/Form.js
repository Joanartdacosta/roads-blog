import TextArea from "./details/TextArea";
import Input from "./details/Input";
import Select from "./details/Select";
import SubmitButton from "./details/SubmitButton";

export default function Form() {
  return (
    <form className="pb-20">
      <Input type={"text"} label={"Nome"} />
      <Input type={"email"} label={"Email"} />
      <TextArea />

      <div className="pt-10 pb-10">
        <p>
          Se tiver interesse em solicitar um roteiro gratuito, preencha os
          seguintes campos:
        </p>
      </div>

      <div class="grid md:grid-cols-2 md:gap-6">
        <Input type={"text"} label={"Ponto de Partida"} />
        <Input type={"text"} label={"Ponto de Chegada"} />
      </div>

      <div class="grid md:grid-cols-2 md:gap-6">
        <Select label={"Mensagem de contacto"} />
        <Input type={"text"} label={"Outros"} />
      </div>

      <SubmitButton label={"Enviar mensagem"} />
    </form>
  );
}
