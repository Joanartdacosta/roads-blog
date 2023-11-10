export default function FairMonth(props) {
  return (
    <div>
      <time className="text-xl font-semibold text-gray-900 dark:text-white">
        {props.month}
      </time>
    </div>
  );
}
