import { useEffect, useState } from "react";
import { getDishes } from "../api";
import CategoryBar from "./CategoryBar";
import List from "./List";

function Menu() {
  const [category, setCategory] = useState("All");
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        setLoading(true);
        setError(null);

        const data = await getDishes(controller.signal);

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

  function addToOrder(dish) {
    setTotal((previousTotal) => previousTotal + dish.price);
  }

  return (
    <section>
      <h2>Menu</h2>

      <CategoryBar
        selected={category}
        onSelect={setCategory}
      />

      {loading && <p>Loading the menu...</p>}

      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <>
          <List dishes={dishes} onAdd={addToOrder} />
          <h2>Order Total: {total} ETB</h2>
        </>
      )}
    </section>
  );
}

export default Menu;