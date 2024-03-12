import ButtonYellow from "@/components/common/UI/button/ButtonYellow";
import BUTTONS_LABELS from "@/components/enums/buttons_labels";
import Image from "next/image";

export default function ModalInfo(props) {
  const PARAGRAPHS = [];

  for (let i = 0; i < props.paragraphs.length; i++) {
    PARAGRAPHS.push(props.paragraphs[i]);
  }

  return (
    <div className="flex">
      <div className="flex ">
        <div className="bg-gray-50 border border-gray-100 dark:bg-gray-800 dark:border-gray-700 p-4 rounded-lg ">
          <time className="font-semibold text-lg text-gray-900 dark:text-white">
            Historia
          </time>

          <ol className="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
            <div className="text-gray-600 dark:text-gray-400">
              <div className="text-base font-normal pb-5">
                <span className="font-medium text-gray-900 dark:text-white">
                  {props.description ? <p>{props.description}</p> : ""}
                </span>{" "}
              </div>

              <div className="text-sm font-normal pb-10">
                {props.paragraphs
                  ? Object.values(props.paragraphs).map((paragraph) => (
                      <p>{paragraph}</p>
                    ))
                  : ""}
              </div>

              <div className="text-xs pb-10">
                <p className="font-extrabold">Fonte:</p>
                <p> {props.sources}</p>
              </div>

              <ButtonYellow
                label={BUTTONS_LABELS.close}
                onClick={props.onClick}
              />
            </div>
          </ol>
        </div>
      </div>

      <Image
        src={props.imgURL}
        alt={props.title}
        unoptimized
        contain={true}
        width={300}
        height={100}
        className="object-cover image-responsive"
      />
    </div>
  );
}
