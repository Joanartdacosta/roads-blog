import BlackButton from "../../button/BlackButton";

export default function CardInfoButton(props) {
  const ARRAY = [];

  for (let i = 0; i < props.array.length; i++) {
    ARRAY.push(props.array[i]);
  }

  return (
    <div className="flex flex-wrap gap-12 justify-start">
      {ARRAY.map((trip) => {
        return (
          <div>
            <div class="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href={trip.href}>
                <img class="rounded-t-lg" src={trip.imgURL} alt={trip.title} />
              </a>
              <div class="p-5">
                <a href={trip.href}>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {trip.title}
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {trip.paragraph1}
                </p>

                <BlackButton
                  href={trip.href}
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Saber mais
                </BlackButton>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
