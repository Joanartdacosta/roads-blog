import LocationIcon from "@/components/common/icons/location/LocationIcon";

export default function FairLocation(props) {
  return (
    <div>
      <div>
        <span className="text-base font-bold text-gray-900">{props.title}</span>
      </div>
      <div className="flex pb-2 pt-2">
        <span>
          <LocationIcon />
        </span>

        {props?.town3 ? (
          <span className="text-base text-gray-800">
            {props.town1} || {props.town2} || {props.town3}
          </span>
        ) : (
          <span className="text-base text-gray-800">
            {props.town1} || {props.town2}
          </span>
        )}
      </div>
    </div>
  );
}
