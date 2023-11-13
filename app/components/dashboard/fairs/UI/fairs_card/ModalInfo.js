import ButtonYellow from "@/components/common/UI/button/ButtonYellow";

export default function ModalInfo(props) {
  return (
    <div>
      <div className="p-5 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <time className="text-lg font-semibold text-gray-900 dark:text-white">
          Mais detalhes
        </time>

        <ol className="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
          <div className="text-gray-600 dark:text-gray-400">
            <div className="text-base font-normal pb-5">
              <span className="font-medium text-gray-900 dark:text-white">
                <p>{props.description}</p>
              </span>{" "}
            </div>
            <div className="text-sm font-normal pb-10">
              <p className="text-base bold italic pb-2">Curiosidades</p>
              <p>{props.paragraph1}</p>
              <p>{props.paragraph2}</p>
              <p>{props.paragraph3}</p>
              <p>{props.paragraph4}</p>
            </div>

            <ButtonYellow onClick={props.onClick} label={"Fechar"} />
          </div>
        </ol>
      </div>
    </div>
  );
}
