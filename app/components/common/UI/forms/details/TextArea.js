import FORM_LABELS from "@/components/enums/form_labels";
import Label from "./Label";

export default function TextArea(props) {
  return (
    <div>
      <div className="relative z-0 w-full mb-6">
        <textarea
          type="textarea"
          name={props.label}
          id={props.label}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
          placeholder=" "
        />
        <Label for={"message"} label={FORM_LABELS.message} />
      </div>
    </div>
  );
}
