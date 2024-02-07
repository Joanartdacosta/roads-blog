export default function CardProverb(props) {
  const ARRAY = [];

  for (let i = 0; i < props.array.length; i++) {
    ARRAY.push(props.array[i]);
  }

  return (
    <div className="m-auto">
      {ARRAY.map((element) => {
        return (
          <div>
            <a
              href={element.href}
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={element.imgUrl}
                alt={element.title}
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {element.title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {element.p1}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {element.p2}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {element.p3}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {element.p4}
                </p>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
}
