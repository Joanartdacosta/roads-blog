import Link from "next/link";
import { Dropdown } from "flowbite-react";

export default function NavbarLink(props) {
  const ARRAY = [];

  for (let i = 0; i < props.array.length; i++) {
    ARRAY.push(props.array[i]);
  }

  return (
    <div>
      {ARRAY.map((item) => {
        return (
          <Dropdown.Item className="hover:bg-black">
            {" "}
            <Link
              className="text-gray-300 hover:text-yellow-300 text-base"
              href={item.href}
            >
              {item.section}
            </Link>
          </Dropdown.Item>
        );
      })}
    </div>
  );
}
