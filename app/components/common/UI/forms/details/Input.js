import Label from "@/components/common/UI/forms/details/Label";

export default function Input(props) {
  return (
    <div>
      {" "}
      <div className="relative z-0 w-full mb-6 group">
        <input
          type={props.type}
          name={props.label}
          id={props.label}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
          placeholder=" "
          required
        />
        <Label for={"name"} label={props.label} />
      </div>
    </div>
  );
}
