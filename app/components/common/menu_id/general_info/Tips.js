import InfoBullets from "./InfoBullets";
import { useSelector } from "react-redux";

export default function Tips(props) {
  let current = null;
  if (props.page === "trip") {
    current = useSelector((state) => state.trip.selectedTrip);
  } else if (props.page === "tour") {
    current = useSelector((state) => state.tour.selectedTour);
  }

  return (
    <div>
      {current?.bullets ? <InfoBullets bullets={current.bullets} /> : ""}

      <div
        className="p-8 bg-white rounded-lg md:p-8 dark:bg-gray-800"
        id="about"
        role="tabpanel"
        aria-labelledby="about-tab"
      >
        {current?.prices ? (
          <div className="py-5 border-b border-gray-200 dark:border-gray-700">
            <p className="text-gray-500 dark:text-gray-400 py-5">Preçário</p>
            <div
              role="list"
              className="space-y-4 text-gray-500 dark:text-gray-400"
            >
              {current.prices.map((price) => {
                return (
                  <div
                    className="poppins text-sm text-green-600 dark:text-green-500"
                    key={price}
                  >
                    <p className="text-gray-500">{price}</p>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      {current?.restaurants ? (
        <div
          className="p-8 bg-white rounded-lg md:p-8 dark:bg-gray-800"
          id="about"
          role="tabpanel"
          aria-labelledby="about-tab"
        >
          <div className="py-5 border-b border-gray-200 dark:border-gray-700">
            <p className="text-gray-500 dark:text-gray-400">Restaurantes</p>

            <div
              role="list"
              className="space-y-4 text-gray-500 dark:text-gray-400"
            >
              {current.restaurants.map((restaurant) => {
                return (
                  <p
                    className="text-green-600 dark:text-green-500"
                    key={restaurant}
                  >
                    {restaurant}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {current?.hotels ? (
        <div
          className="p-8 bg-white rounded-lg md:p-8 dark:bg-gray-800"
          id="about"
          role="tabpanel"
          aria-labelledby="about-tab"
        >
          <div className="py-5 border-b border-gray-200 dark:border-gray-700">
            <p className="text-gray-500 dark:text-gray-400">Alojamento:</p>

            <div
              role="list"
              className="space-y-4 text-gray-500 dark:text-gray-400"
            >
              {current.hotels.map((hotel) => {
                return (
                  <p className="text-green-600 dark:text-green-500" key={hotel}>
                    {hotel}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
