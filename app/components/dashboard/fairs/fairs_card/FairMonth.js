export default function FairMonth(props) {
  return (
    <div>
      {props.startDate !== props.endDate ? (
        <time className="dark:text-white font-semibold text-base text-amber-900 ">
          <span className="text-gray-900  italic pr-1">De</span>{" "}
          {props.startDate}
          <span className="text-gray-900 italic pr-2 pl-2">-</span>
          {props.endDate}
        </time>
      ) : (
        <time className="dark:text-white font-semibold text-base text-amber-900 ">
          {props.startDate}
        </time>
      )}
    </div>
  );
}
