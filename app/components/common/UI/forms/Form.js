import BUTTONS_LABELS from "@/components/enums/buttons_labels";
import FORM_LABELS from "@/components/enums/form_labels";
import Input from "@/components/common/UI/forms/details/Input";
import SubmitButton from "@/components/common/UI/forms/details/SubmitButton";
import TextArea from "@/components/common/UI/forms/details/TextArea";

import { useState } from "react";

export default function Form() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");

  return (
    <div className="pl-8 pr-8">
      <form
        className="pb-20 "
        id="freetour"
        action="https://formcarry.com/s/yq6rkztaug1"
        method="POST"
      >
        <Input
          type={"text"}
          label={FORM_LABELS.name}
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          type={"email"}
          label={FORM_LABELS.email}
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextArea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          id="message"
          name="message"
          placeholder="Enter your message..."
          required
        />

        <SubmitButton id="submit" label={BUTTONS_LABELS.sendMessage} />
      </form>
    </div>
  );
}
