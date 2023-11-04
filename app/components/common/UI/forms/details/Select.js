import Label from "./Label";

export default function Select(props) {
  return (
    <div>
      <div class="relative z-0 w-full mb-6 group">
        <select
          id="transport"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
          required
        >
          <option className="bg-yellow" selected>
            Seleccione o meio de transporte de preferencia.
          </option>
          <option value="car">Carro</option>
          <option value="airplane">Aviao</option>
          <option value="train">Comboio</option>
          <option value="bus">Autocarro</option>
        </select>

        <Label label={"Transporte"} />
      </div>
    </div>
  );
}
