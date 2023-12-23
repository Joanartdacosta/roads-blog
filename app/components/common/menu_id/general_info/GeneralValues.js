export default function GeneralValues(props) {
  return (
    <div
      className="bg-white rounded-lg dark:bg-gray-800"
      id={props.id}
      role="tabpanel"
      aria-labelledby={props.id}
    >
      <dl className="m-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
        <div className="flex flex-col items-center justify-center">
          <dt className="mb-2 text-3xl font-extrabold">{props.value}</dt>
          <dd className="text-gray-500 dark:text-gray-400">{props.subtitle}</dd>
        </div>
      </dl>
    </div>
  );
}
