import { useState } from "react";
import { dishes } from "../data";
import CategoryBar from "./Category";
import DishList from "./List";

function Menu() {
  const [category, setCategory] = useState("All");
  const [total, setTotal] = useState(0);
  const [counts, setCounts] = useState({});

  const shown =
    category === "All"
      ? dishes
      : dishes.filter(
          (dish) => dish.category === category
        );

  function addToOrder(dish) {
    setTotal(total + dish.price);

    setCounts({
      ...counts,
      [dish.id]: (counts[dish.id] || 0) + 1,
    });
  }

  return (
    <section className="menu-section">
      <h2>Our Menu</h2>

      <CategoryBar
        selected={category}
        onSelect={setCategory}
      />

      <DishList
        dishes={shown}
        counts={counts}
        onAdd={addToOrder}
      />

      <div className="order-total">
        <h2>Order Total: {total} ETB</h2>
      </div>
    </section>
  );
}

export default Menu;