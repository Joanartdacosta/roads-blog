export default function Info() {
  return (
    <div>
      <div
        id="accordion-flush-body-1"
        aria-labelledby="accordion-flush-heading-1"
      >
        <div class="py-5 border-b border-gray-200 dark:border-gray-700">
          <p class="mb-2 text-gray-500 dark:text-gray-400">{props.info1}</p>
          <p class="text-gray-500 dark:text-gray-400">
            {props.info2}
            <a
              href="/docs/getting-started/introduction/"
              class="text-blue-600 dark:text-blue-500 hover:underline"
            >
              {props.link1}
            </a>{" "}
            {props.info3}
          </p>
        </div>
      </div>
      <div
        id="accordion-flush-body-3"
        aria-labelledby="accordion-flush-heading-3"
      >
        <div class="py-5 border-b border-gray-200 dark:border-gray-700">
          <p class="mb-2 text-gray-500 dark:text-gray-400">{props.infop1}</p>
          <p class="mb-2 text-gray-500 dark:text-gray-400">{props.infop2}</p>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            {props.infobullets}
          </p>
          <ul class="pl-5 text-gray-500 list-disc dark:text-gray-400">
            <li>
              <a
                href="https://flowbite.com/pro/"
                class="text-blue-600 dark:text-blue-500 hover:underline"
              >
                {props.infobullet1}
              </a>
            </li>
            <li>
              <a
                href="https://tailwindui.com/"
                rel="nofollow"
                class="text-blue-600 dark:text-blue-500 hover:underline"
              >
                {props.infobullet2}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
