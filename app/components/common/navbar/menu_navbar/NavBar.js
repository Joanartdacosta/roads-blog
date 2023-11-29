import NAVBAR_LINKS from "@/components/lists/navbar_links_map";
import SmallFooter from "../SmallFooter";
import Link from "next/link";

export default function NavBar(props) {
  const ARRAY = [];

  for (let i = 0; i < props.array.length; i++) {
    ARRAY.push(props.array[i]);
  }

  return (
    <div className="bg-black h-auto top-0 left-0 w-1/5 overflow-hidden relative fixed p-10">
      <img
        className="w-24 m-auto mt-4 mb-4"
        src="https://estradas-website.s3.amazonaws.com/Estradas/icons/logos/logo-estradas4.png"
        alt="logo"
      />
      {NAVBAR_LINKS["order"].map((item) => {
        return (
          <div className="font-thin">
            <Link href={NAVBAR_LINKS[item].href}>
              <p className="text-gray-300 hover:text-yellow-300 font-thin">
                {NAVBAR_LINKS[item].section}
              </p>
            </Link>
          </div>
        );
      })}
      <SmallFooter />
    </div>
  );
}
