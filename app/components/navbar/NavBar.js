import Link from "next/link";

export default function NavBar() {
  return (
    <div className="navbar background">
      <div className="display-flex padding-40 display-column navbar-background">
        <Link className="link font-text padding-10" href="/sobre">
          Sobre
        </Link>

        <Link className="link font-text padding-10" href="/passadicos">
          Passeios e Passadicos
        </Link>
        <Link className="link font-text padding-10" href="/roteiros">
          Roteiros
        </Link>

        <Link
          className="link font-text padding-10"
          href="/roteiros/#roteirogratuito"
        >
          Roteiro Personalizado GRATUITO
        </Link>
        <Link className="link font-text padding-10" href="/geossitios">
          Geossitios
        </Link>

        <Link className="link font-text padding-10" href="/feiras">
          Feiras, Romarias e Festivais
        </Link>

        <Link className="link font-text padding-10" href="/proverbios">
          Proverbio do Mes
        </Link>

        <Link className="link font-text padding-10" href="/contactos">
          Contactos
        </Link>
      </div>
      <div></div>
    </div>
  );
}
