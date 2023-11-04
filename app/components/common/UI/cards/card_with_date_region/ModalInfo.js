import YellowButton from "@/components/common/UI/button/YellowButton";

export default function ModalInfo(props) {
  return (
    <div>
      <div class="p-5 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <time class="text-lg font-semibold text-gray-900 dark:text-white">
          Mais detalhes
        </time>

        <ol class="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
          <div class="text-gray-600 dark:text-gray-400">
            <div class="text-base font-normal pb-5">
              <span class="font-medium text-gray-900 dark:text-white">
                <p>{props.description}</p>
              </span>{" "}
            </div>
            <div class="text-sm font-normal pb-10">
              <p className="text-base bold italic pb-2">Curiosidades</p>
              <p>{props.paragraph1}</p>
              <p>{props.paragraph2}</p>
              <p>{props.paragraph3}</p>
              <p>{props.paragraph4}</p>
            </div>

            <YellowButton onClick={props.onClick} label={"Fechar"} />
          </div>
        </ol>
      </div>
    </div>
  );
}
