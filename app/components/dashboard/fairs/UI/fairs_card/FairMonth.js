export default function FairMonth(props) {
  return (
    <div>
      <time className="text-lg font-semibold text-gray-900 dark:text-white">
        {props.month}
      </time>
    </div>
  );
}
