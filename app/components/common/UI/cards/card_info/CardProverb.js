export default function CardProverb(props) {
  return (
    <div className="m-auto mb-20 mt-20">
      {props.array.map((element) => {
        return (
          <div
            key={element.id}
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-2xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover h-96 w-96 rounded-t-lg md:h-auto  md:rounded-none md:rounded-l-lg"
              src={element.imgUrl}
              alt={element.title}
            />
            <div className="flex flex-col justify-between leading-normal text-center">
              <h5 className="m-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {element.title}
              </h5>

              <div className="mb-10 font-normal text-lg text-center poppins text-gray-700 dark:text-gray-400">
                {props.array[0].p.map((p) => {
                  return <p>{p}</p>;
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
