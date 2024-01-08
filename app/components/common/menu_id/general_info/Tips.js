import InfoBullets from "./InfoBullets";

export default function Tips(props) {
  return (
    <div>
      <InfoBullets
        description={props.description}
        bullet1={props.bullet1}
        bullet2={props.bullet2}
        bullet3={props.bullet3}
      />

      <div
        className="p-8 bg-white rounded-lg md:p-8 dark:bg-gray-800"
        id="about"
        role="tabpanel"
        aria-labelledby="about-tab"
      >
        <div className="py-5 border-b border-gray-200 dark:border-gray-700">
          <p className="text-gray-500 dark:text-gray-400">Restaurantes</p>
          {props.restaurant1 ? (
            <ul
              role="list"
              className="space-y-4 text-gray-500 dark:text-gray-400"
            >
              <li className="text-green-600 dark:text-green-500">
                {props.restaurant1}
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
            {props.hotel1 ? (
              <li className="text-green-600 dark:text-green-500">
                {props.hotel1}
              </li>
            ) : (
              <p className="text-gray-600 dark:text-green-500">
                Nao existem sugestoes de alojamentos
              </p>
            )}
            {props.hotel2 ? (
              <li className="text-green-600 dark:text-green-500">
                {props.hotel2}
              </li>
            ) : (
              ""
            )}
            {props.hotel3 ? (
              <li className="text-green-600 dark:text-green-500">
                {props.hotel3}
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
