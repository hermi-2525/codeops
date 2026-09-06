import { useCallback, useMemo, useState } from "react";
import { CartProvider } from "./context/CartProvider";
import { useFetch } from "./hooks/useFetch";
import { CartContext } from "./context/CartProvider";
import { useContext } from "react";
import CategoryBar from "./components/CategoryBar";
import DishList from "./components/DishList";
import CartBadge from "./components/CartBadge";
import Checkout from "./components/Checkout";
import Search from "./components/Search";
import "./App.css";

function Menu() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const url = `/dishes.json?category=${encodeURIComponent(
    category
  )}`;

  const { data, loading, error } = useFetch(url);

  const { dispatch } = useContext(CartContext);

  const shown = useMemo(() => {
    const dishes = data ?? [];

    return dishes.filter((dish) => {
      const matchesCategory =
        category === "All" ||
        dish.category === category;

      const matchesSearch = dish.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [data, category, search]);

  const addToCart = useCallback(
    (dish) => {
      dispatch({
        type: "add",
        dish
      });
    },
    [dispatch]
  );

  return (
    <section>
      <Search
        search={search}
        onChange={setSearch}
      />

      <CategoryBar
        category={category}
        onChange={setCategory}
      />

      {loading && (
        <p className="loading">
          Loading menu...
        </p>
      )}

      {error && (
        <p className="error">
          {error}
        </p>
      )}

      {!loading && !error && (
        <DishList
          dishes={shown}
          onAdd={addToCart}
        />
      )}
    </section>
  );
}

function App() {
  return (
    <CartProvider>
      <header>
        <div>
          <h1>Addis Eats</h1>
          <p>Ethiopian Food Marketplace</p>
        </div>

        <CartBadge />
      </header>

      <main>
        <Menu />
        <Checkout />
      </main>
    </CartProvider>
  );
}

export default App;