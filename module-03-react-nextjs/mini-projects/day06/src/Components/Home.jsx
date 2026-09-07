import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home">
      <h1>Welcome to Addis Eats</h1>

      <p>
        Discover delicious Ethiopian food and order your favorites
        from one place.
      </p>

      <Link to="/menu" className="button">
        Explore Menu
      </Link>

      <section className="specials">
        <h2>Today's Specials</h2>

        <div className="special-grid">
          <div className="special-card">
            <h3>Doro Wat</h3>
            <p>Traditional Ethiopian chicken stew.</p>
            <strong>240 ETB</strong>
          </div>

          <div className="special-card">
            <h3>Kitfo</h3>
            <p>Seasoned minced beef with Ethiopian sides.</p>
            <strong>320 ETB</strong>
          </div>

          <div className="special-card">
            <h3>Shiro</h3>
            <p>Delicious chickpea stew.</p>
            <strong>120 ETB</strong>
          </div>
        </div>
      </section>
    </section>
  );
}