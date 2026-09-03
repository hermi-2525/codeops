import { useEffect, useState } from "react";
import DishList from "./List";

function Menu() {
  const [category, setCategory] = useState("All");
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("/dishes.json", {
          signal: controller.signal
        });

        if (!response.ok) {
          throw new Error("Could not load the menu");
        }

        const data = await response.json();

        const filtered =
          category === "All"
            ? data
            : data.filter((dish) => dish.category === category);

        setDishes(filtered);
      } catch (e) {
        if (e.name !== "AbortError") {
          setError(e.message);
        }
      } finally {
        setLoading(false);
      }
    }

    load();

    return () => controller.abort();
  }, [category]);

  useEffect(() => {
    document.title = `${dishes.length} dishes`;
  }, [dishes]);

  if (loading) {
    return <p className="status">Loading the menu...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <section>
      <h2>Menu</h2>

      <div className="categories">
        <button
          className={category === "All" ? "active" : ""}
          onClick={() => setCategory("All")}
        >
          All
        </button>

        <button
          className={category === "Main" ? "active" : ""}
          onClick={() => setCategory("Main")}
        >
          Main
        </button>

        <button
          className={category === "Vegan" ? "active" : ""}
          onClick={() => setCategory("Vegan")}
        >
          Vegan
        </button>

        <button
          className={category === "Grill" ? "active" : ""}
          onClick={() => setCategory("Grill")}
        >
          Grill
        </button>
      </div>

      <DishList dishes={dishes} />
    </section>
  );
}

export default Menu;