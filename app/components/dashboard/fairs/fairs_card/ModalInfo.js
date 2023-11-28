import ButtonYellow from "@/components/common/UI/button/ButtonYellow";
import BUTTONS_LABELS from "@/components/enums/buttons_labels";

export default function ModalInfo(props) {
  return (
    <div>
      <div className="bg-gray-50 border border-gray-100 dark:bg-gray-800 dark:border-gray-700 p-5 rounded-lg ">
        <time className="font-semibold text-lg text-gray-900 dark:text-white">
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

            <ButtonYellow
              label={BUTTONS_LABELS.close}
              onClick={props.onClick}
            />
          </div>
        </ol>
      </div>
    </div>
  );
}
