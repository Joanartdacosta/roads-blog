export default function FairLocation(props) {
  return (
    <div>
      <div>
        <span className="text-base font-bold text-gray-900">{props.title}</span>
      </div>
      <div>
        <span className="text-sm text-gray-800">
          {props.district} || {props.town2}
        </span>{" "}
      </div>
    </div>
  );
}
