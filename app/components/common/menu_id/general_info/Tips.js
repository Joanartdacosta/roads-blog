import InfoBullets from "@/components/common/menu_id/general_info/InfoBullets";
import TAB_BUTTONS_LABELS from "@/components/enums/tab_buttons_labels";
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
      {current?.bullets ? (
        <InfoBullets
          bullets={current.bullets}
          label={TAB_BUTTONS_LABELS.recomendation}
        />
      ) : (
        ""
      )}

      <div
        className="bg-white rounded-lg md:p-8 dark:bg-gray-800"
        id="tip"
        role="tabpanel"
        aria-labelledby="tip"
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
          className="bg-white rounded-lg md:pl-8 dark:bg-gray-800"
          id="about"
          role="tabpanel"
          aria-labelledby="about-tab"
        >
          <div className=" border-b border-gray-200 dark:border-gray-700 pb-4">
            <p className="text-gray-500 font-extrabold dark:text-gray-400 pb-2">
              Restaurantes
            </p>

            <div className=" text-gray-500 dark:text-gray-400">
              {current.restaurants.map((restaurant) => {
                return (
                  <p
                    className="text-green-600 dark:text-green-500 pb-2"
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
          className=" bg-white rounded-lg md:pl-8 dark:bg-gray-800 pt-8 pb-10"
          id="about"
          role="tabpanel"
          aria-labelledby="about-tab"
        >
          <div className=" border-b border-gray-200 dark:border-gray-700 pb-4">
            <p className="text-gray-500 font-extrabold dark:text-gray-400 pb-2">
              Alojamento
            </p>

            <div role="list" className=" text-gray-500 dark:text-gray-400">
              {current.hotels.map((hotel) => {
                return (
                  <p
                    className="text-green-600 dark:text-green-500 pb-2"
                    key={hotel}
                  >
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
