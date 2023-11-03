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
          <Dropdown.Item>
            {" "}
            <Link href={item.href}>{item.section}</Link>
          </Dropdown.Item>
        );
      })}
    </div>
  );
}
