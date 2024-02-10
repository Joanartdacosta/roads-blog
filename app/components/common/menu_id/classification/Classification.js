import CLASSIFICATION_LABELS from "@/components/enums/classification_labels";
import { useSelector } from "react-redux";

export default function Classification(props) {
  let current = null;
  if (props.page === "trip") {
    current = useSelector((state) => state.trip.selectedTrip);
  } else if ("page" === "tour") {
    current = useSelector((state) => state.tour.selectedTour);
  }

  return (
    <div className="p-8 m-auto">
      <div>
        {current.percentageAcessibility ? (
          <div>
            <div className="mb-1 text-base font-medium dark:text-white">
              <p> {CLASSIFICATION_LABELS.acessibility}</p>
            </div>
            <div className="w-96 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
              <div
                className="bg-green-700 h-2.5 rounded-full dark:bg-gray-300"
                style={{
                  width: current.percentageAcessibility,
                }}
              ></div>
            </div>
          </div>
        ) : (
          ""
        )}

        {current.percentageDifficulty ? (
          <div>
            <div className="mb-1 text-base font-medium dark:text-white">
              <p> {CLASSIFICATION_LABELS.difficulty}</p>
            </div>
            <div className="w-96 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
              <div
                className="bg-green-700 h-2.5 rounded-full dark:bg-gray-300"
                style={{ width: current.percentageDifficulty }}
              ></div>
            </div>
          </div>
        ) : (
          ""
        )}

        {current.percentageNature ? (
          <div>
            <div className="mb-1 text-base font-medium dark:text-white">
              <p> {CLASSIFICATION_LABELS.nature}</p>
            </div>
            <div className="w-96 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
              <div
                className="bg-green-700 h-2.5 rounded-full dark:bg-gray-300"
                style={{ width: current.percentageNature }}
              ></div>
            </div>
          </div>
        ) : (
          ""
        )}

        {current.percentageSupport ? (
          <div>
            <div className="mb-1 text-base font-medium dark:text-white">
              <p> {CLASSIFICATION_LABELS.support}</p>
            </div>
            <div className="w-96 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
              <div
                className="bg-green-700 h-2.5 rounded-full dark:bg-gray-300"
                style={{ width: current.percentageSupport }}
              ></div>
            </div>
          </div>
        ) : (
          ""
        )}

        {current.percentageShadow ? (
          <div>
            <div className="mb-1 text-base font-medium dark:text-white">
              <p>{CLASSIFICATION_LABELS.shadow}</p>
            </div>
            <div className="w-96 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
              <div
                className="bg-green-700 h-2.5 rounded-full dark:bg-gray-300"
                style={{ width: current.percentageShadow }}
              ></div>
            </div>
          </div>
        ) : (
          ""
        )}

        {current.percentageSafety ? (
          <div>
            <div className="mb-1 text-base font-medium dark:text-white">
              <p> {CLASSIFICATION_LABELS.safety}</p>
            </div>
            <div className="w-96 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
              <div
                className="bg-green-700 h-2.5 rounded-full dark:bg-gray-300"
                style={{ width: current.percentageSafety }}
              ></div>
            </div>
          </div>
        ) : (
          ""
        )}
        {current.percentageEmergency ? (
          <div>
            <div className="mb-1 text-base font-medium dark:text-white">
              <p> {CLASSIFICATION_LABELS.emergency}</p>
            </div>
            <div className="w-96 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
              <div
                className="bg-green-700 h-2.5 rounded-full dark:bg-gray-300"
                style={{ width: current.percentageEmergency }}
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
