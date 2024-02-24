import Image from "next/image";

export default function CardInfo(props) {
  console.log(props);
  return (
    <div className="m-auto">
      <div className="p-4">
        {props.data?.title ? (
          <h1 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
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
            <p className="mb-8"> {props.data.price}</p>
          </div>
        ) : (
          ""
        )}
        {props.data?.source ? (
          <div>
            <h2 className="text-lg font-extrabold tracking-tight text-gray-900 dark:text-white">
              Fonte:
            </h2>
            <p className="mb-5 text-sm"> {props.data.source}</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
