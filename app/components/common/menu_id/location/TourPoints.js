import { useSelector } from "react-redux";
import InfoPoints from "./InfoPoints";

export default function TourPoints(props) {
  let current = null;
  if (props.page === "trip") {
    current = useSelector((state) => state.trip.selectedTrip);
  } else if (props.page === "tour") {
    current = useSelector((state) => state.tour.selectedTour);
  }

  return (
    <div className="flex flex-col justify justify-center">
      {current.day1 ? (
        <div>
          <InfoPoints
            bullets={current.day1}
            key={current.day1}
            label={"Dia 1"}
          />
        </div>
      ) : (
        ""
      )}
      {current.day1 ? (
        <div>
          <InfoPoints
            bullets={current.day2}
            key={current.day2}
            label={"Dia 2"}
          />
        </div>
      ) : (
        ""
      )}
      {current.day1 ? (
        <div>
          <InfoPoints
            bullets={current.day3}
            key={current.day3}
            label={"Dia 3"}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
