import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home">
      <h1>Welcome to Addis Eats</h1>

      <p>
        Discover delicious Ethiopian dishes from
        our menu.
      </p>

      <Link to="/menu" className="primary-button">
        View Menu
      </Link>
    </section>
  );
}