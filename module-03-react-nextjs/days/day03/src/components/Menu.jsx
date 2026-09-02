import { useState } from "react";
import { dishes } from "../data";
import Dish from "./Dish";
import CategoryBar from "./Category";

function Menu() {
  const [category, setCategory] = useState("All");
  const [total, setTotal] = useState(0);

  const shown =
    category === "All"
      ? dishes
      : dishes.filter((dish) => dish.category === category);

  function addToOrder(price) {
    setTotal(total + price);
  }

  return (
    <div>
      <CategoryBar
        selected={category}
        onSelect={setCategory}
      />

      <div className="menu-grid">
        {shown.length === 0 ? (
          <p>No dishes in this category yet.</p>
        ) : (
          shown.map((dish) => (
            <Dish
              key={dish.id}
              name={dish.name}
              price={dish.price}
              onAdd={() => addToOrder(dish.price)}
            />
          ))
        )}
      </div>

      <h2 className="total">
        Order Total: {total} ETB
      </h2>
    </div>
  );
}

export default Menu;