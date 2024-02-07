import Link from "next/link";

export default function ButtonBlack(props) {
  if (props.href) {
    return (
      <Link href={props.href}>
        <p className="poppins text-sm text-gray-400 border opacity-90 border-gray-900 border bg-black hover:bg-gray-100 hover:text-black focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium text-xl px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
          {props.label}
        </p>
      </Link>
    );
  }

  return (
    <Link
      onClick={props.onClick}
      className=" rounded-lg bg-black hover:bg-gray-100 hover:text-black focus:outline-none font-medium text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 "
    >
      {props.label}
    </Link>
  );
}
