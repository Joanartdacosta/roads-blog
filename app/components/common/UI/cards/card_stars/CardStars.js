import ButtonYellow from "../../button/ButtonYellow";
import StartWhite from "../../../icons/stars/StarWhite";
import StartYellow from "../../../icons/stars/StarYellow";
import { RevealList, RevealWrapper } from "next-reveal";

export default function CardStars(props) {
  const ARRAY = [];

  for (let i = 0; i < props.array.length; i++) {
    ARRAY.push(props.array[i]);
  }

  return (
    <div className="flex flex-wrap gap-8 justify-center">
      {ARRAY.map((trip) => {
        return (
          <div className="p-4 bg-neutral-100 rounded-lg shadow dark:bg-yellow-800 dark:border-gray-700 w-96 h-70">
            <RevealList interval={50} delay={50} reset={true}>
              <div className="w-full p-2 pb-8">
                <img
                  className="w-full object-cover h-60 rounded-t-lg"
                  src={trip.imgUrl}
                  alt={trip.title}
                />
              </div>
              <div className="p-2">
                <a href={trip.href}>
                  <h5 className="text-xl tracking-tight text-gray-800 dark:text-yellow poppins">
                    {trip.title}
                  </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-2.5 justify-start pb-4">
                  <StartYellow />
                  <StartYellow />
                  <StartYellow />
                  <StartWhite />
                  <span className="bg-gray-200 text-dark-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                    {trip.evaluation}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    {trip.district}, {trip.town}
                  </span>
                  <div className="pt-2">
                    <ButtonYellow href={trip.href} label={"Saber mais"} />
                  </div>
                </div>
              </div>
            </RevealList>
          </div>
        );
      })}
    </div>
  );
}
