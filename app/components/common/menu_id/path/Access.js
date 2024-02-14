import PathImage from "./PathImage";
import { useSelector } from "react-redux";

export default function Access(props) {
  let current = null;
  if (props.page === "trip") {
    current = useSelector((state) => state.trip.selectedTrip);
  } else if (props.page === "tour") {
    current = useSelector((state) => state.tour.selectedTour);
  }

  return (
    <div
      id="accordion-flush-body-3"
      aria-labelledby="accordion-flush-heading-3"
    >
      <p className="mb-2 text-gray-500 dark:text-gray-400">{props.label}</p>

      {props.image1 ? (
        <div>
          <PathImage image={current?.image1} title={current?.title} />
          <PathImage image={current?.image11} title={current?.title} />
        </div>
      ) : (
        ""
      )}

      {props.image3 || props.image4 || props.image5 ? (
        <div>
          <p className="underline">Percurso em partes: </p>
          <PathImage image={current?.image2} title={current?.title} />
          <PathImage image={current?.image3} title={current?.title} />
          <PathImage image={current?.image4} title={current?.title} />
          <PathImage image={current?.image5} title={current?.title} />
        </div>
      ) : (
        ""
      )}

      {props.image2 ||
      props.image21 ||
      props.image22 ||
      props.image23 ||
      props.image24 ? (
        <div>
          <p className="underline">Percurso em partes: </p>
          <PathImage image={current?.image21} title={current?.title} />
          <PathImage image={current?.image22} title={current?.title} />
          <PathImage image={current?.image23} title={current?.title} />
          <PathImage image={current?.image24} title={current?.title} />
          <PathImage image={current?.image25} title={current?.title} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
