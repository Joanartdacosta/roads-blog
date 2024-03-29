import { useSelector } from "react-redux";

export default function Introduction(props) {
  let current = null;
  if (props.page === "trip") {
    current = useSelector((state) => state.trip.selectedTrip);
  } else if (props.page === "tour") {
    current = useSelector((state) => state.tour.selectedTour);
  }

  return (
    <div>
      <div className="m-auto text-gray-900 text-center dark:text-white">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-8 mt-8 text-3xl font-extrabold">
            {current?.title}
          </div>

          <div className="mb-8 ml-10 mr-10 text-gray-500 dark:text-gray-400">
            {current?.description1
              ? current.description1.map((description) => {
                  return (
                    <div
                      className="text-base text-gray-900 dark:text-white"
                      key={description}
                    >
                      <p className="text-gray-500">{description}</p>
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
}
