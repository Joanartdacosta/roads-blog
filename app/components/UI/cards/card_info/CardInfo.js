export default function CardInfo() {
  return (
    <div>
      <a
        href="#"
        class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src="https://images.unsplash.com/photo-1603657289433-e4983d2114b9?auto=format&fit=crop&q=80&w=1769&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Proverbio de Outubro
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Holariloai Holariloai Holariloai Holariloai Bailar assim sabe taooo
            bemmmmm
          </p>
        </div>
      </a>
    </div>
  );
}