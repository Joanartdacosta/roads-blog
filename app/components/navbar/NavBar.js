import Link from "next/link";

export default function NavBar() {
  return (
    <div>
      <div className="display-flex display-column height-100 padding-40 small-menu">
        <Link className="link font-text padding-10" href="/sobre">
          Sobre
        </Link>
        <Link className="link font-text padding-10" href="/miradouros">
          Miradouros
        </Link>

        <Link className="link font-text padding-10" href="/passeios">
          Passeios
        </Link>
        <Link className="link font-text padding-10" href="/geossitios">
          Geossitios
        </Link>
        <Link className="link font-text padding-10" href="#passadicos">
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
