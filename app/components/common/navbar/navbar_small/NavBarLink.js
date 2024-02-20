import Link from "next/link";
import NAVBAR_LINKS from "@/components/lists/navbar_links_map";

export default function NavbarLink(props) {
  return (
    <div className="bg-black h-max p-4 poppins">
      {NAVBAR_LINKS["order"].map((item) => {
        return (
          <div className="font-thin cursor-pointer">
            <Link href={NAVBAR_LINKS[item].href}>
              <p className="text-gray-300 hover:text-yellow-300 font-thin p-2 ">
                {NAVBAR_LINKS[item].section}
              </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
