export default function FairMonth(props) {
  return (
    <div>
      <time className="dark:text-white font-semibold text-base text-amber-900 ">
        {props.date}
      </time>
    </div>
  );
}
