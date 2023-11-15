export default function FairMonth(props) {
  return (
    <div>
      <time className="text-base font-semibold text-amber-900 dark:text-white">
        {props.month}
      </time>
    </div>
  );
}
