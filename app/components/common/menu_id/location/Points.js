import InfoBullets from "../general_info/InfoBullets";
import { useSelector } from "react-redux";

export default function Points(props) {
  let current = null;
  if (props.page === "trip") {
    current = useSelector((state) => state.trip.selectedTrip);
  } else if (props.page === "tour") {
    current = useSelector((state) => state.tour.selectedTour);
  }

  return (
    <div className="flex flex-col justify justify-center">
      <InfoBullets
        bullet1={current?.point1}
        bullet2={current?.point2}
        bullet3={current?.point3}
        bullet4={current?.point4}
        bullet5={current?.point5}
      />
    </div>
  );
}
