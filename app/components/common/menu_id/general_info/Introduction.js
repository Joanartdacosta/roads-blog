import Image from "next/image";

export default function Introduction(props) {
  return (
    <div className="">
      <div className="m-auto text-gray-900  dark:text-white">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-8 mt-8 text-3xl font-extrabold">{props.title}</div>

          <div className="mb-8 text-gray-500 dark:text-gray-400">
            {props.introduction}
          </div>
        </div>
      </div>
    </div>
  );
}
