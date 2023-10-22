import Link from "next/link";

import { Dropdown } from "flowbite-react";
import SmallFooter from "./SmallFooter";

export default function NavBar() {
  return (
    <div>
      <Dropdown
        className="navbar"
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
          <Link href="/sobre">Sobre</Link>
        </Dropdown.Item>

        <Dropdown.Item>
          {" "}
          <Link href="/feiras">Feiras, Romarias e Festivais</Link>
        </Dropdown.Item>

        <Dropdown.Item>
          {" "}
          <Link href="/passadicos">Passeios e Passadicos</Link>
        </Dropdown.Item>

        <Dropdown.Item>
          {" "}
          <Link href="/roteiros">Roteiros</Link>
        </Dropdown.Item>

        <Dropdown.Item>
          {" "}
          <Link href="/roteiros/#roteirogratuito">
            Roteiro Personalizado GRATUITO
          </Link>
        </Dropdown.Item>

        <Dropdown.Item>
          {" "}
          <Link href="/geossitios">Geossitios</Link>
        </Dropdown.Item>

        <Dropdown.Item>
          <Link href="/proverbios">Proverbio do Mes</Link>
        </Dropdown.Item>

        <Dropdown.Item>
          <Link href="/media">Media</Link>
        </Dropdown.Item>

        <Dropdown.Item>
          <Link href="/contactos">Contactos</Link>
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
