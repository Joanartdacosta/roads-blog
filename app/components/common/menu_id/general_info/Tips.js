import InfoBullets from "./InfoBullets";
import { useSelector } from "react-redux";

export default function Tips(props) {
  let current = null;
  if (props.page === "trip") {
    current = useSelector((state) => state.trip.selectedTrip);
  } else if ("page" === "tour") {
    current = useSelector((state) => state.tour.selectedTour);
  }

  return (
    <div>
      <InfoBullets
        bullet1={current.bullet1}
        bullet2={current.bullet2}
        bullet3={current.bullet3}
        bullet4={current.bullet4}
        bullet5={current.bullet5}
      />

      <div
        className="p-8 bg-white rounded-lg md:p-8 dark:bg-gray-800"
        id="about"
        role="tabpanel"
        aria-labelledby="about-tab"
      >
        {current.price1 || current.price2 || current.price3 ? (
          <div className="py-5 border-b border-gray-200 dark:border-gray-700">
            <p className="text-gray-500 dark:text-gray-400">Precario</p>
            <ul
              role="list"
              className="space-y-4 text-gray-500 dark:text-gray-400"
            >
              <li className="text-green-600 dark:text-green-500">
                {current.price1}
              </li>
              <li className="text-green-600 dark:text-green-500">
                {current.price2}
              </li>
              <li className="text-green-600 dark:text-green-500">
                {current.price3}
              </li>
            </ul>
          </div>
        ) : (
          <p className="text-gray-600 dark:text-green-500"></p>
        )}
      </div>

      <div
        className="p-8 bg-white rounded-lg md:p-8 dark:bg-gray-800"
        id="about"
        role="tabpanel"
        aria-labelledby="about-tab"
      >
        <div className="py-5 border-b border-gray-200 dark:border-gray-700">
          <p className="text-gray-500 dark:text-gray-400">Restaurantes</p>
          {current.restaurant1 ? (
            <ul
              role="list"
              className="space-y-4 text-gray-500 dark:text-gray-400"
            >
              <li className="text-green-600 dark:text-green-500">
                {current.restaurant1}
              </li>
            </ul>
          ) : (
            <p className="text-gray-600 dark:text-green-500">
              Nao existem sugestoes de restaurantes.
            </p>
          )}
        </div>
        <div className="py-5 border-b border-gray-200 dark:border-gray-700">
          <p className="mb-2 text-gray-500 dark:text-gray-400">Alojamentos</p>
          <ul
            role="list"
            className="space-y-4 text-gray-500 dark:text-gray-400"
          >
            {current.hotel1 ? (
              <li className="text-green-600 dark:text-green-500">
                {current.hotel1}
              </li>
            ) : (
              <p className="text-gray-600 dark:text-green-500">
                Nao existem sugestoes de alojamentos
              </p>
            )}
            {current.hotel2 ? (
              <li className="text-green-600 dark:text-green-500">
                {current.hotel2}
              </li>
            ) : (
              ""
            )}
            {current.hotel3 ? (
              <li className="text-green-600 dark:text-green-500">
                {current.hotel3}
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
