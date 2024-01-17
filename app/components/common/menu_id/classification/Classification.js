import CLASSIFICATION_LABELS from "@/components/enums/classification_labels";

export default function Classification(props) {
  return (
    <div className="p-8 m-auto">
      <div>
        {props.percentageAcessibility ? (
          <div>
            <div className="mb-1 text-base font-medium dark:text-white">
              <p> {CLASSIFICATION_LABELS.acessibility}</p>
            </div>
            <div className="w-96 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
              <div
                className="bg-green-700 h-2.5 rounded-full dark:bg-gray-300"
                style={{ width: props.percentageAcessibility }}
              ></div>
            </div>
          </div>
        ) : (
          ""
        )}

        {props.percentageDifficulty ? (
          <div>
            <div className="mb-1 text-base font-medium dark:text-white">
              <p> {CLASSIFICATION_LABELS.difficulty}</p>
            </div>
            <div className="w-96 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
              <div
                className="bg-green-700 h-2.5 rounded-full dark:bg-gray-300"
                style={{ width: props.percentageDifficulty }}
              ></div>
            </div>
          </div>
        ) : (
          ""
        )}

        {props.percentageNature ? (
          <div>
            <div className="mb-1 text-base font-medium dark:text-white">
              <p> {CLASSIFICATION_LABELS.nature}</p>
            </div>
            <div className="w-96 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
              <div
                className="bg-green-700 h-2.5 rounded-full dark:bg-gray-300"
                style={{ width: props.percentageNature }}
              ></div>
            </div>
          </div>
        ) : (
          ""
        )}

        {props.percentageSupport ? (
          <div>
            <div className="mb-1 text-base font-medium dark:text-white">
              <p> {CLASSIFICATION_LABELS.support}</p>
            </div>
            <div className="w-96 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
              <div
                className="bg-green-700 h-2.5 rounded-full dark:bg-gray-300"
                style={{ width: props.percentageSupport }}
              ></div>
            </div>
          </div>
        ) : (
          ""
        )}

        {props.percentageShadow ? (
          <div>
            <div className="mb-1 text-base font-medium dark:text-white">
              <p>{CLASSIFICATION_LABELS.shadow}</p>
            </div>
            <div className="w-96 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
              <div
                className="bg-green-700 h-2.5 rounded-full dark:bg-gray-300"
                style={{ width: props.percentageShadow }}
              ></div>
            </div>
          </div>
        ) : (
          ""
        )}

        {props.percentageSafety ? (
          <div>
            <div className="mb-1 text-base font-medium dark:text-white">
              <p> {CLASSIFICATION_LABELS.safety}</p>
            </div>
            <div className="w-96 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
              <div
                className="bg-green-700 h-2.5 rounded-full dark:bg-gray-300"
                style={{ width: props.percentageSafety }}
              ></div>
            </div>
          </div>
        ) : (
          ""
        )}
        {props.percentageEmergency ? (
          <div>
            <div className="mb-1 text-base font-medium dark:text-white">
              <p> {CLASSIFICATION_LABELS.emergency}</p>
            </div>
            <div className="w-96 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
              <div
                className="bg-green-700 h-2.5 rounded-full dark:bg-gray-300"
                style={{ width: props.percentageEmergency }}
              ></div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
