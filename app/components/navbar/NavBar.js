import Link from "next/link";

import { Dropdown } from "flowbite-react";
import SmallFooter from "./SmallFooter";

export default function NavBar() {
  return (
    <div>
      <Dropdown
        className="height-100 margin-auto padding-40"
        label={
          <img
            className="icon"
            src="https://estradas-website.s3.amazonaws.com/Estradas/icons/Design+sem+nome+(1).png"
            alt="menu"
          />
        }
      >
        <img
          className="logo"
          src="https://estradas-website.s3.amazonaws.com/Estradas/roads-logo.png"
          alt="logo"
        />
        <Dropdown.Item>
          {" "}
          <Link href="/about">Sobre</Link>
        </Dropdown.Item>

        <Dropdown.Item>
          {" "}
          <Link href="/fairs">Feiras, Romarias e Festivais</Link>
        </Dropdown.Item>

        <Dropdown.Item>
          {" "}
          <Link href="/trips">Passeios e Passadicos</Link>
        </Dropdown.Item>

        <Dropdown.Item>
          {" "}
          <Link href="/tours">Roteiros</Link>
        </Dropdown.Item>

        <Dropdown.Item>
          {" "}
          <Link href="/tours/#freetour">Roteiro Personalizado GRATUITO</Link>
        </Dropdown.Item>

        <Dropdown.Item>
          {" "}
          <Link href="/geospots">Geossitios</Link>
        </Dropdown.Item>

        <Dropdown.Item>
          <Link href="/proverbs">Proverbio do Mes</Link>
        </Dropdown.Item>

        <Dropdown.Item>
          <Link href="/media">Media</Link>
        </Dropdown.Item>

        <Dropdown.Item>
          <Link href="/contacts">Contactos</Link>
        </Dropdown.Item>

        <SmallFooter />
      </Dropdown>
    </div>
  );
}
// {LINKS.map((link) => (
//  <Dropdown.Item> <Link className="link font-text padding-10" key={link.id} to={link.to}>
//     {link.text}
//   </Link></Dropdown.Item>))}

// </div>
