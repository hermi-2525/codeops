import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { items } = useCart();
  const { user, logout } = useAuth();

  return (
    <header className="header">
      <Link to="/" className="logo">
        Addis Eats
      </Link>

      <div className="header-right">
        <span>Cart: {items.length}</span>

        {user ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </header>
  );
}