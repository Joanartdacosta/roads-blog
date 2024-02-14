import InfoBullets from "../general_info/InfoBullets";
import { useSelector } from "react-redux";

export default function TripPoints(props) {
  let current = null;
  if (props.page === "trip") {
    current = useSelector((state) => state.trip.selectedTrip);
  } else if (props.page === "tour") {
    current = useSelector((state) => state.tour.selectedTour);
  }

  return (
    <div>
      {current.points ? (
        <InfoBullets bullets={current.points} key={current.points} />
      ) : (
        <div
          className="p-8 bg-white rounded-lg md:p-8 dark:bg-gray-800"
          id="about"
          role="tabpanel"
          aria-labelledby="about-tab"
        >
          <p>De momento, nao existem pontos de interesse.</p>
        </div>
      )}
    </div>
  );
}
