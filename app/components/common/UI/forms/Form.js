import BUTTONS_LABELS from "@/components/enums/buttons_labels";
import Input from "./details/Input";
import Select from "./details/Select";
import SubmitButton from "./details/SubmitButton";
import TextArea from "./details/TextArea";
import FORM_LABELS from "@/components/enums/form_labels";

export default function Form() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function submit(e) {
    e.preventDefault();

    fetch("https://formcarry.com/s/XXXXXXX", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: email,
        name: name,
        arrival: arrival,
        departure: departure,
        message: message,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.code === 200) {
          setSubmitted(true);
        } else {
          setError(res.message);
        }
      })
      .catch((error) => setError(error));
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (submitted) {
    return <p>We've received your message, thank you for contacting us!</p>;
  }

  return (
    <form className="pb-20" id="freetour" onSubmit={submit}>
      <Input
        type={"text"}
        label={FORM_LABELS.name}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type={"email"}
        label={FORM_LABELS.email}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <TextArea />

      <div className="pt-10 pb-10">
        <p>Para solicitar o roteiro gratuito, estes campos sao obrigatorios:</p>
      </div>

      <div className="grid md:grid-cols-2 md:gap-6">
        <Input
          type={"text"}
          label={FORM_LABELS.departurePoint}
          value={departure}
          onChange={(e) => setDeparture(e.target.value)}
        />
        <Input
          type={"text"}
          label={FORM_LABELS.arrivalPoint}
          value={arrival}
          onChange={(e) => setArrival(e.target.value)}
        />
      </div>

      <div className="grid md:grid-cols-2 md:gap-6">
        <Select label={FORM_LABELS.message} />
        <Input
          type={"text"}
          label={FORM_LABELS.others}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <SubmitButton label={BUTTONS_LABELS.sendMessage} />
    </form>
  );
}
