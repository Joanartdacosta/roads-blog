export default function CardInfo(props) {
  return (
    <div className="m-auto ">
      <div className="p-4">
        {props.data?.title ? (
          <h1 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center pb-8">
            {props.data.title}
          </h1>
        ) : (
          ""
        )}

        {props.data.p.map((p) => {
          return (
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {p}
            </p>
          );
        })}

        {props.data?.price ? (
          <div>
            <h2 className="text-lg font-extrabold tracking-tight text-gray-900 dark:text-white mt-8">
              Preco:
            </h2>
            <p className="mb-8 font-normal text-gray-700">
              {" "}
              {props.data.price}
            </p>
          </div>
        ) : (
          ""
        )}

        {props.data?.source ? (
          <div>
            <p className="text-sm font-extrabold tracking-tight text-gray-900 dark:text-white">
              Fonte:
            </p>
            <p className="mb-5 text-sm text-gray-700"> {props.data.source}</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
