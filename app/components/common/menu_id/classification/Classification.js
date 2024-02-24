import CLASSIFICATION_LABELS from "@/components/enums/classification_labels";
import { useSelector } from "react-redux";

export default function Classification(props) {
  let current = null;
  if (props.page === "trip") {
    current = useSelector((state) => state.trip.selectedTrip);
  } else if (props.page === "tour") {
    current = useSelector((state) => state.tour.selectedTour);
  }

  return (
    <div className="p-4 responsive-width">
      {current?.percentage ? (
        <div>
          {current.percentage.acessibility ? (
            <div>
              <div className="mb-1 text-base font-medium dark:text-white ">
                <p> {CLASSIFICATION_LABELS.acessibility}</p>
              </div>
              <div className=" bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                <div
                  className="bg-green-700 h-2.5 rounded-full dark:bg-gray-300 "
                  style={{
                    width: current.percentage.acessibility,
                  }}
                ></div>
              </div>
            </div>
          ) : (
            ""
          )}

          {current?.percentage.difficulty ? (
            <div>
              <div className="mb-1 text-base font-medium dark:text-white">
                <p> {CLASSIFICATION_LABELS.difficulty}</p>
              </div>
              <div className=" bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                <div
                  className="bg-green-700 h-2.5 rounded-full dark:bg-gray-300"
                  style={{ width: current.percentage.difficulty }}
                ></div>
              </div>
            </div>
          ) : (
            ""
          )}

          {current?.percentage.nature ? (
            <div>
              <div className="mb-1 text-base font-medium dark:text-white">
                <p> {CLASSIFICATION_LABELS.nature}</p>
              </div>
              <div className=" bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                <div
                  className="bg-green-700 h-2.5 rounded-full dark:bg-gray-300"
                  style={{ width: current.percentage.nature }}
                ></div>
              </div>
            </div>
          ) : (
            ""
          )}

          {current?.percentage.support ? (
            <div>
              <div className="mb-1 text-base font-medium dark:text-white">
                <p> {CLASSIFICATION_LABELS.support}</p>
              </div>
              <div className=" bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                <div
                  className="bg-green-700 h-2.5 rounded-full dark:bg-gray-300"
                  style={{ width: current.percentage.support }}
                ></div>
              </div>
            </div>
          ) : (
            ""
          )}

          {current?.percentage.shadow ? (
            <div>
              <div className="mb-1 text-base font-medium dark:text-white">
                <p>{CLASSIFICATION_LABELS.shadow}</p>
              </div>
              <div className=" bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                <div
                  className="bg-green-700 h-2.5 rounded-full dark:bg-gray-300"
                  style={{ width: current.percentage.shadow }}
                ></div>
              </div>
            </div>
          ) : (
            ""
          )}

          {current?.percentage.safety ? (
            <div>
              <div className="mb-1 text-base font-medium dark:text-white">
                <p> {CLASSIFICATION_LABELS.safety}</p>
              </div>
              <div className=" bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                <div
                  className="bg-green-700 h-2.5 rounded-full dark:bg-gray-300"
                  style={{ width: current.percentage.safety }}
                ></div>
              </div>
            </div>
          ) : (
            ""
          )}

          {current?.percentage.emergency ? (
            <div>
              <div className="mb-1 text-base font-medium dark:text-white">
                <p> {CLASSIFICATION_LABELS.emergency}</p>
              </div>
              <div className="bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                <div
                  className="bg-green-700 h-2.5 rounded-full dark:bg-gray-300"
                  style={{ width: current.percentage.emergency }}
                ></div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
