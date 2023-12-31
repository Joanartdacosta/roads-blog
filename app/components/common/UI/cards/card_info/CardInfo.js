import Image from "next/image";

export default function CardInfo(props) {
  const ARRAY = [];

  for (let i = 0; i < props.array.length; i++) {
    ARRAY.push(props.array[i]);
  }

  return (
    <div className="m-auto">
      {ARRAY.map((trip) => {
        return (
          <div>
            <a
              href={trip.href}
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <Image
                alt={"foto de" + trip.title}
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                layout="fill"
                src={trip.imgUrl}
                unoptimized
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {trip.title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {trip.p1}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {trip.p2}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {trip.p3}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {trip.p4}
                </p>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
}
