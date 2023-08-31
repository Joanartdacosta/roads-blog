import Link from "next/link";
import navBarStyles from "./navbar.module.css";

export default function NavBar() {
  return (
    <div className={navBarStyles.navBar}>
      <div className={navBarStyles.menu}>
        <Link className={navBarStyles.navBarLink} href="/sobre">
          Sobre
        </Link>
        <Link className={navBarStyles.navBarLink} href="/miradouros">
          Miradouros
        </Link>

        <Link className={navBarStyles.navBarLink} href="/passeios">
          Passeios
        </Link>
        <Link className={navBarStyles.navBarLink} href="/geossitios">
          Geossitios
        </Link>
        <Link className={navBarStyles.navBarLink} href="#passadicos">
          Passadicos
        </Link>
        {/* <Link className={navBarStyles.navBarLink} href="/humor">
          Humor
        </Link>
        <Link className={navBarStyles.navBarLink} href="/proverbios">
          Proverbio do Mes
        </Link>
        <Link className={navBarStyles.navBarLink} href="/imprensa">
          Artigos & Imprensa
        </Link>
        <Link className={navBarStyles.navBarLink} href="/contactos">
          Contactos
        </Link> */}
      </div>
    </div>
  );
}

{
  /* {LINKS.map((link) => (
        <Link className="navbar-link" key={link.id} to={link.to}>
          {link.text}
        </Link> */
}
