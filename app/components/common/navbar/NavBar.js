import NavBarLarge from "./navbar_large/NavBarLarge";
import NavBarMobile from "./navbar_small/NavBarMobile";

export default function NavBar() {
  return (
    <div>
      <div className="menu-normal oswald">
        <NavBarLarge />
      </div>

      <div className="menu-hamburguer z-20">
        <NavBarMobile />
      </div>
    </div>
  );
}
