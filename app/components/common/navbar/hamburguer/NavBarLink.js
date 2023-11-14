import Link from "next/link";
import { Dropdown } from "flowbite-react";

export default function NavbarLink(props) {
  const ARRAY = [];

  for (let i = 0; i < props.array.length; i++) {
    ARRAY.push(props.array[i]);
  }

  return (
    <div className="bg-black h-max">
      {ARRAY.map((item) => {
        return (
          <Dropdown.Item className="hover:bg-black">
            {" "}
            <Link
              className="text-gray-300 hover:text-cyan-400 text-base"
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