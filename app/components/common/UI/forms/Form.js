export default function Form() {
  return (
    <form className="pb-20">
      <div class="relative z-0 w-full mb-6 group">
        <input
          type="text"
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
          Nome
        </label>
      </div>

      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:text-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-500 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
        </div>

        <div class="relative z-0 w-full mb-6 group">
          <input
            type="tel"
            name="floating_phone"
            id="floating_phone"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-yellow-500 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
            placeholder=" "
          />
          <label
            for="floating_phone"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Telemovel
          </label>
        </div>
      </div>

      <div class="relative z-0 w-full mb-6">
        <textarea
          type="textarea"
          name="message"
          id="message"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
          placeholder=" "
        />
        <label
          for="floating_phone"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-500 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Mensagem de Contacto
        </label>
      </div>

      <div className="pt-10 pb-10">
        <p>
          Se tiver interesse em solicitar um roteiro gratuito, preencha os
          seguintes campos:
        </p>
      </div>
      <div class="grid md:grid-cols-2 md:gap-6"></div>

      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="floating_company"
            id="floating_company"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_company"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Ponto de partida
          </label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="floating_company"
            id="floating_company"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_company"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Ponto de chegada
          </label>
        </div>
      </div>

      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 w-full mb-6 group">
          <select
            id="transport"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
            required
          >
            <option className="bg-yellow" selected>
              Seleccione o meio de transporte de preferencia.
            </option>
            <option value="carro">Carro</option>
            <option value="aviao">Aviao</option>
            <option value="FR">Comboio</option>
            <option value="DE">Autocarro</option>
          </select>

          <label
            for="floating_company"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Tipos de Transporte
          </label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="floating_company"
            id="floating_company"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_company"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Outros
          </label>
        </div>
      </div>

      <button
        type="submit"
        class="text-white bg-yellow-500 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-400 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
      >
        Enviar
      </button>
    </form>
  );
}
