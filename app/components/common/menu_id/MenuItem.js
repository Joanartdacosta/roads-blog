import Link from "next/link";

export default function MenuItem(props) {
  return (
    <div>
      <div className="w-full display-none">
        <Link onClick={props.onClick} href={props.href}>
          <button
            id={props.id}
            type="button"
            role="tab"
            aria-controls={props.id}
            aria-selected="true"
            value={props.label}
            className="play font-bold inline-block w-full p-4 rounded-tl-lg bg-gray-50 text-black hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
            onClick={props.onClick}
          >
            {props.label}
          </button>
        </Link>
      </div>
      <div className="menu-icons m-auto">
        <Link onClick={props.onClick} href={props.href}>
          <button
            id={props.id}
            type="button"
            role="tab"
            aria-controls={props.id}
            aria-selected="true"
            value={props.label}
            className="play font-bold inline-block p-4 rounded-tl-lg bg-gray-50 text-black hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            {props.icon}
          </button>
        </Link>
      </div>
    </div>
  );
}
