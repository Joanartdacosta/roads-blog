import TourPoints from "@/components/common/menu_id/location/TourPoints";
import TripPoints from "@/components/common/menu_id/location/TripPoints";
import { useSelector } from "react-redux";

export default function Points(props) {
  let current = null;
  if (props.page === "trip") {
    current = useSelector((state) => state.trip.selectedTrip);
  } else if (props.page === "tour") {
    current = useSelector((state) => state.tour.selectedTour);
  }

  if (props.page === "tour") {
    return (
      <TourPoints
        day1={current?.day1}
        day2={current?.day2}
        day3={current?.day3}
        page="tour"
      />
    );
  } else if (props.page === "trip") {
    return <TripPoints points={current.points} page="trip" />;
  }
}
