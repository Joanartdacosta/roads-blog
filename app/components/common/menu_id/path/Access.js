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

      {current.imagesPath1 ? (
        <div>
          {current.imagesPath1.map((image) => {
            return (
              <div>
                <PathImage image={image} title={current.title} />
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}

      {current.imagesPath2 ? (
        <div>
          {current.imagesPath2.map((image) => {
            return (
              <div>
                <PathImage image={image} title={current.title} />
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}

      {current.imagesPath3 ? (
        <div>
          {current.imagesPath3.map((image) => {
            return (
              <div>
                <PathImage image={image} title={current.title} />
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}

      {current.imagesPath4 ? (
        <div>
          {current.imagesPath4.map((image) => {
            return (
              <div>
                <PathImage image={image} title={current.title} />
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
