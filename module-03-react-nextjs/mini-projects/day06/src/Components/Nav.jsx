import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Home
      </NavLink>

      <NavLink
        to="/menu"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Menu
      </NavLink>

      <NavLink
        to="/cart"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Cart
        
      </NavLink>
    </nav>
  );
}