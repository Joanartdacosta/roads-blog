export default function Input(props) {
  return (
    <div>
      {" "}
      <div class="relative z-0 w-full mb-6 group">
        <input
          type={props.type}
          name="floating_first_name"
          id="floating_first_name"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
          placeholder=" "
          required
        />
        <label
          for="floating_first_name"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-500 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          {props.label}
        </label>
      </div>
    </div>
  );
}
