import CLASSIFICATION_LABELS from "@/components/enums/classification_labels";

export default function Classification(props) {
  let percentageAcessibility = props.percentageAcessibility;
  let percentageDifficulty = props.percentageDifficulty;
  let percentageEmergency = props.percentageEmergency;
  let percentageNature = props.percentageNature;
  let percentageSafety = props.percentageSafety;
  let percentageShadow = props.percentageShadow;
  let percentageSupport = props.percentageSupport;

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
                style={{ width: percentageAcessibility }}
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
                style={{ width: percentageDifficulty }}
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
                style={{ width: percentageNature }}
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
                style={{ width: percentageSupport }}
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
                style={{ width: percentageShadow }}
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
                style={{ width: percentageSafety }}
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
                style={{ width: percentageEmergency }}
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
