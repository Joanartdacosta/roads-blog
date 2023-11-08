export default function FairLocation(props) {
  return (
    <div>
      <div class="text-base font-normal">
        <span class="font-medium text-gray-900 dark:text-white"></span>{" "}
        {props.title}
        <span class="font-medium text-gray-900 dark:text-white">
          {props.district} || {props.town2}
        </span>{" "}
      </div>
    </div>
  );
}
