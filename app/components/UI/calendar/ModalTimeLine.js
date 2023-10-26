export default function ModalTimeLine(props) {
  return (
    <div>
      <div class="p-5 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <time class="text-lg font-semibold text-gray-900 dark:text-white">
          Mais detalhes
        </time>
        <ol class="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
          <li>
            <div class="text-gray-600 dark:text-gray-400">
              <div class="text-base font-normal">
                <span class="font-medium text-gray-900 dark:text-white">
                  {props.paragraph1} <p> </p>
                </span>{" "}
              </div>
              <div class="text-sm font-normal">
                {props.paragraph2} <p> </p>
                {props.paragraph3}
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}
