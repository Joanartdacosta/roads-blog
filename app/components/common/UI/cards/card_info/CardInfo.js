export default function CardInfo(props) {
  return (
    <div className="m-auto">
      <div className="p-4">
        {props.title ? (
          <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
            {props.title}
          </h5>
        ) : (
          ""
        )}

        {props.array[0].p.map((p) => {
          return (
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {p}
            </p>
          );
        })}

        {props.array.price ? (
          <div>
            <h2 className="text-lg font-extrabold tracking-tight text-gray-900 dark:text-white mt-8">
              Preco:
            </h2>
            <p className="mb-8"> {props.array[0].price}</p>

            <h2 className="text-lg font-extrabold tracking-tight text-gray-900 dark:text-white">
              Fonte:
            </h2>
            <p className="mb-5 text-sm"> {props.array[0].source}</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
