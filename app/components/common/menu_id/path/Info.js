export default function Info(props) {
  return (
    <div>
      <div
        id="accordion-flush-body-1"
        aria-labelledby="accordion-flush-heading-1"
      >
        <div class="py-5 border-b border-gray-200 dark:border-gray-700">
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            {props.description}
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            {props.waydescription}
            <a
              href="/docs/getting-started/introduction/"
              class="text-green-600 dark:text-green-500 hover:underline"
            >
              get started
            </a>{" "}
            and start developing websites even faster with components on top of
            Tailwind CSS.
          </p>
        </div>
      </div>
      <div
        id="accordion-flush-body-3"
        aria-labelledby="accordion-flush-heading-3"
      >
        <div class="py-5 border-b border-gray-200 dark:border-gray-700">
          <p class="mb-2 text-gray-500 dark:text-gray-400">{props.access}</p>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            However, we actually recommend using both Flowbite, Flowbite Pro,
            and even Tailwind UI as there is no technical reason stopping you
            from using the best of two worlds.
          </p>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Learn more about these technologies:
          </p>
          <ul class="pl-5 text-gray-500 list-disc dark:text-gray-400">
            <li>
              <a
                href="https://flowbite.com/pro/"
                class="text-green-600 dark:text-green-500 hover:underline"
              >
                Flowbite Pro
              </a>
            </li>
            <li>
              <a
                href="https://tailwindui.com/"
                rel="nofollow"
                class="text-green-600 dark:text-green-500 hover:underline"
              >
                Tailwind UI
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
