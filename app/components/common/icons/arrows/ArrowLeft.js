export default function ArrowLeft() {
  return (
    <div>
      <button
        type="button"
        class="flex justify-center items-center me-4 h-full cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span class="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
          <svg
            class="rtl:rotate-180 w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
    </div>
  );
}
