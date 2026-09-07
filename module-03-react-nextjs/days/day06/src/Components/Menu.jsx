import { useSearchParams } from "react-router-dom";
import { useContext } from "react";
import DishList from "./DishList";
import { dishes } from "../data";
import { CartContext } from "../context/CartContext";

export default function Menu() {
  const [params, setParams] = useSearchParams();

  const category =
    params.get("category") || "All";

  const { addItem } = useContext(CartContext);

  const categories = [
    "All",
    ...new Set(dishes.map((dish) => dish.category))
  ];

  const filteredDishes =
    category === "All"
      ? dishes
      : dishes.filter(
          (dish) => dish.category === category
        );

  function changeCategory(value) {
    if (value === "All") {
      setParams({});
    } else {
      setParams({
        category: value
      });
    }
  }

  return (
    <section>
      <h1>Our Menu</h1>

      <div className="categories">
        {categories.map((item) => (
          <button
            key={item}
            className={
              category === item ? "active" : ""
            }
            onClick={() =>
              changeCategory(item)
            }
          >
            {item}
          </button>
        ))}
      </div>

      <DishList
        dishes={filteredDishes}
        onAdd={addItem}
      />
    </section>
  );
}