import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/menu"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Menu
      </NavLink>

      <NavLink
        to="/cart"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Cart
      </NavLink>

      <NavLink
        to="/checkout"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Checkout
      </NavLink>
    </nav>
  );
}