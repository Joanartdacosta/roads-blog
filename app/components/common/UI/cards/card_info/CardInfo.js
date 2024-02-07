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
              <div className="p-4">
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

                <h2 className="text-lg font-extrabold tracking-tight text-gray-900 dark:text-white">
                  Preco:
                </h2>
                <p className="mb-5"> {trip.price}</p>

                <h2 className="text-lg font-extrabold tracking-tight text-gray-900 dark:text-white">
                  Fonte:
                </h2>
                <p className="mb-5"> {trip.source}</p>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
}
