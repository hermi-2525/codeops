import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import CategoryBar from "./CategoryBar";
import DishList from "./DishList";

export default function Menu() {
  const [params, setParams] = useSearchParams();

  const category = params.get("category") || "All";

  const searchRef = useRef(null);

  const url =
    category === "All"
      ? "/dishes.json"
      : `/dishes.json?category=${encodeURIComponent(category)}`;

  const { data, loading, error } = useFetch("/dishes.json");

  useEffect(() => {
    searchRef.current?.focus();
  }, []);

  const dishes = data || [];

  const filteredDishes =
    category === "All"
      ? dishes
      : dishes.filter((dish) => dish.category === category);

  function setCategory(value) {
    if (value === "All") {
      setParams({});
    } else {
      setParams({ category: value });
    }
  }

  if (loading) {
    return <p>Loading the menu...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <section>
      <h1>Our Menu</h1>

      <input
        ref={searchRef}
        className="search"
        type="text"
        placeholder="Search dishes..."
        onChange={(event) => {
          const search = event.target.value.toLowerCase();

          const elements = document.querySelectorAll(".dish-card");

          elements.forEach((element) => {
            const name = element
              .querySelector("h3")
              ?.textContent.toLowerCase();

            element.style.display =
              name?.includes(search) ? "block" : "none";
          });
        }}
      />

      <CategoryBar
        category={category}
        setCategory={setCategory}
      />

      <DishList dishes={filteredDishes} />
    </section>
  );
}