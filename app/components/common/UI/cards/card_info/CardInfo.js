export default function CardInfo(props) {
  return (
    <div className="m-auto">
      <div className="p-4">
        {props.data?.title ? (
          <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
            {props.data.title}
          </h5>
        ) : (
          ""
        )}

        {props.data[0]?.p.map((p) => {
          return (
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {p}
            </p>
          );
        })}

        {props.data[0]?.price ? (
          <div>
            <h2 className="text-lg font-extrabold tracking-tight text-gray-900 dark:text-white mt-8">
              Preco:
            </h2>
            <p className="mb-8"> {props.data[0].price}</p>
          </div>
        ) : (
          ""
        )}
        {props.data[0]?.source ? (
          <div>
            <h2 className="text-lg font-extrabold tracking-tight text-gray-900 dark:text-white">
              Fonte:
            </h2>
            <p className="mb-5 text-sm"> {props.data[0].source}</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
