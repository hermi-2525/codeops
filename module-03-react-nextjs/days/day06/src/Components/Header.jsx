import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        Addis Eats
      </Link>

      <p>Ethiopian Food Marketplace</p>
    </header>
  );
}