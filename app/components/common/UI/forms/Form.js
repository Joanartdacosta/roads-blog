import BUTTONS_LABELS from "@/components/enums/buttons_labels";
import Input from "./details/Input";
import Select from "./details/Select";
import SubmitButton from "./details/SubmitButton";
import TextArea from "./details/TextArea";
import FORM_LABELS from "@/components/enums/form_labels";

export default function Form() {
  return (
    <form className="pb-20" id="freetour">
      <Input type={"text"} label={FORM_LABELS.name} />
      <Input type={"email"} label={FORM_LABELS.email} />
      <TextArea />

      <div className="pt-10 pb-10">
        <p>Para solicitar o roteiro gratuito, estes campos sao obrigatorios:</p>
      </div>

      <div className="grid md:grid-cols-2 md:gap-6">
        <Input type={"text"} label={FORM_LABELS.departurePoint} />
        <Input type={"text"} label={FORM_LABELS.arrivalPoint} />
      </div>

      <div className="grid md:grid-cols-2 md:gap-6">
        <Select label={FORM_LABELS.message} />
        <Input type={"text"} label={FORM_LABELS.others} />
      </div>

      <SubmitButton label={BUTTONS_LABELS.sendMessage} />
    </form>
  );
}
