export default function FairLocation(props) {
  return (
    <div>
      <div className="text-base font-normal">
        <span className="font-medium text-gray-900 dark:text-white"></span>{" "}
        {props.title}
        <span className="font-medium text-gray-900 dark:text-white">
          {props.district} || {props.town2}
        </span>{" "}
      </div>
    </div>
  );
}
