import NavBarLarge from "./navbar_large/NavBarLarge";
import NavBarSmall from "./navbar_small/NavBarSmall";

export default function NavBar() {
  return (
    <div>
      <div className="menu-normal oswald">
        <NavBarLarge />
      </div>

      <div className="play menu-hamburguer z-20">
        <NavBarSmall />
      </div>
    </div>
  );
}
