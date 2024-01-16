export default function ArrowRight() {
  return (
    <div>
      <button
        type="button"
        className="flex justify-center items-center h-full cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
          <svg
            className="rtl:rotate-180 w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
