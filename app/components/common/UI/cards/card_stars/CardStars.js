import ButtonYellow from "../../button/ButtonYellow";
import StartWhite from "../../../icons/stars/StarWhite";
import StartYellow from "../../../icons/stars/StarYellow";

export default function CardStars(props) {
  const ARRAY = [];

  for (let i = 0; i < props.array.length; i++) {
    ARRAY.push(props.array[i]);
  }

  return (
    <div className="flex flex-wrap gap-10 justify-start">
      {ARRAY.map((trip) => {
        return (
          <div className="w-full max-w-sm bg-white border border-yello-200 rounded-lg shadow dark:bg-yello-800 dark:border-gray-700">
            <a href={trip.href}>
              <img
                className="p-8 rounded-t-lg"
                src={trip.imgURL}
                alt={trip.title}
              />
            </a>
            <div className="px-5 pb-5">
              <a href={trip.href}>
                <h5 className="text-2xl font-semibold tracking-tight text-yellow-600 dark:text-yellow">
                  {trip.title}
                </h5>
              </a>
              <div className="flex items-center mt-2.5 mb-2.5 justify-start">
                <StartYellow />
                <StartYellow />
                <StartYellow />
                <StartWhite />
                <span className="bg-gray-200 text-dark-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                  {trip.evaluation}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  {trip.district}, {trip.town1}
                </span>
                <ButtonYellow href={trip.href} label={"Saber mais"} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
