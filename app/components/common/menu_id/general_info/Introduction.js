import { useSelector } from "react-redux";

export default function Introduction(props) {
  let current = null;
  if (props.page === "trip") {
    current = useSelector((state) => state.trip.selectedTrip);
  } else if (props.page === "tour") {
    current = useSelector((state) => state.tour.selectedTour);
  }

  return (
    <div className="">
      <div className="m-auto text-gray-900  dark:text-white">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-8 mt-8 text-3xl font-extrabold">
            {current?.title}
          </div>

          <div className="mb-8 text-gray-500 dark:text-gray-400">
            {current?.introduction}
          </div>
        </div>
      </div>
    </div>
  );
}
