import BUTTONS_LABELS from "@/components/enums/buttons_labels";
import ButtonYellow from "@/components/common/UI/button/ButtonYellow";
import Image from "next/image";
import { RevealList } from "next-reveal";
import StartsEvaluation from "./StarsEvaluation";

export default function CardStars(props) {
  return (
    <div className="flex flex-wrap gap-8 justify-center">
      {props.data.map((trip) => {
        return (
          <div
            className="p-4 bg-neutral-100 rounded-lg shadow dark:bg-yellow-800 dark:border-gray-700 w-96 h-70"
            key={trip._id}
          >
            <RevealList interval={50} delay={50} reset={true}>
              <div className="w-full p-2 pb-2">
                <Image
                  alt={trip.title}
                  className="wrap w-full object-cover h-60 rounded-t-lg"
                  contain="true"
                  width={384}
                  height={424}
                  src={trip.imgUrl}
                  unoptimized
                  priority={false}
                />
              </div>
              <div className="p-2">
                <h5 className="text-xl tracking-tight text-gray-800 dark:text-yellow poppins mb-8">
                  {trip.title}
                </h5>
                {trip.evaluation ? (
                  <div className="flex items-center justify-start pb-4">
                    <StartsEvaluation evaluation={trip.evaluation} />
                    <span className="bg-gray-200 text-dark-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                      {trip.evaluation}
                    </span>
                  </div>
                ) : (
                  <div></div>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-base text-gray-900 dark:text-white">
                      {trip.location.district}
                    </span>{" "}
                    <span className="text-sm font-thin text-gray-900">
                      {trip.location.town}
                    </span>
                  </div>

                  <div>
                    <ButtonYellow
                      href={trip.href}
                      label={BUTTONS_LABELS.moreInfo}
                    />
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
